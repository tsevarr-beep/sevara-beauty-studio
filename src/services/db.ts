/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SERVICES, EXPERTS } from '../constants';

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  points: number;
  role: 'user' | 'admin';
}

export interface Appointment {
  id: string;
  userId: string;
  serviceId: string;
  expertId: string;
  date: number; // ISO Day
  time: string;
  status: 'pending' | 'confirmed' | 'cancelled' | 'completed';
  price: number;
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string; // 'salon' or expertId
  text: string;
  timestamp: number;
  read: boolean;
}

class MockDB {
  private users: User[] = [
    { id: '1', name: 'Sevara', email: 'tsevarr@gmail.com', points: 1250, role: 'admin' }
  ];
  
  private appointments: Appointment[] = [];
  private messages: Message[] = [
    { id: 'm1', senderId: 'salon', receiverId: '1', text: 'Hoş geldiniz! Size nasıl yardımcı olabiliriz?', timestamp: Date.now() - 3600000, read: false }
  ];
  
  constructor() {
    // Load from localStorage if exists
    const saved = localStorage.getItem('sevara_db');
    if (saved) {
      const data = JSON.parse(saved);
      this.users = data.users || this.users;
      this.appointments = data.appointments || this.appointments;
      this.messages = data.messages || this.messages;
    }
  }

  private save() {
    localStorage.setItem('sevara_db', JSON.stringify({
      users: this.users,
      appointments: this.appointments,
      messages: this.messages
    }));
  }

  // Auth Simulation
  getCurrentUser() {
    return this.users[0];
  }

  // Appointments
  getAppointments(userId: string) {
    return this.appointments.filter(a => a.userId === userId);
  }

  getAllAppointments() {
    return this.appointments;
  }

  createAppointment(apt: Omit<Appointment, 'id' | 'status'>) {
    const newApt: Appointment = {
      ...apt,
      id: Math.random().toString(36).substr(2, 9),
      status: 'pending'
    };
    this.appointments.push(newApt);
    
    // Add points
    const user = this.users.find(u => u.id === apt.userId);
    if (user) {
      user.points += Math.floor(apt.price / 10);
    }
    
    this.save();
    return newApt;
  }

  updateAppointmentStatus(id: string, status: Appointment['status']) {
    const apt = this.appointments.find(a => a.id === id);
    if (apt) {
      apt.status = status;
      this.save();
    }
  }

  // Messages
  getMessages(userId: string, partnerId: string) {
    return this.messages.filter(m => 
      (m.senderId === userId && m.receiverId === partnerId) || 
      (m.senderId === partnerId && m.receiverId === userId)
    ).sort((a, b) => a.timestamp - b.timestamp);
  }

  getConversations(userId: string) {
    // Basic implementation: find all unique partners the user has messaged
    const partners = new Set<string>();
    this.messages.forEach(m => {
      if (m.senderId === userId) partners.add(m.receiverId);
      if (m.receiverId === userId) partners.add(m.senderId);
    });
    
    return Array.from(partners).map(partnerId => {
      const lastMsg = this.messages
        .filter(m => (m.senderId === userId && m.receiverId === partnerId) || (m.senderId === partnerId && m.receiverId === userId))
        .sort((a, b) => b.timestamp - a.timestamp)[0];
      return { partnerId, lastMsg };
    });
  }

  sendMessage(senderId: string, receiverId: string, text: string) {
    const newMsg: Message = {
      id: Math.random().toString(36).substr(2, 9),
      senderId,
      receiverId,
      text,
      timestamp: Date.now(),
      read: false
    };
    this.messages.push(newMsg);
    this.save();
    return newMsg;
  }
}

export const db = new MockDB();
