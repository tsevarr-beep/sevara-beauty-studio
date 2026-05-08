/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Bell, 
  Home, 
  Scissors, 
  LayoutGrid, 
  User, 
  Calendar, 
  ChevronRight, 
  Star, 
  Eye, 
  Brush, 
  Smile, 
  LogOut,
  Mail,
  Lock,
  ArrowRight,
  Clock,
  Check,
  Settings,
  Shield,
  Search,
  Plus,
  Trash2,
  ChevronLeft,
  MessageSquare,
  Send,
  MapPin,
  Phone,
  Instagram,
  Coffee,
  IceCream,
  Wind,
  Navigation,
  ExternalLink
} from 'lucide-react';

// ... (existing imports and types)

const ContactScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const images = [
    "https://images.unsplash.com/photo-1519415355175-bd09406433d7?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1621210170562-b9e73dc3e75e?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522337094846-8a818192de1f?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1600334129128-685c4582f989?auto=format&fit=crop&q=80&w=800"
  ];

  return (
    <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <div className="flex items-center gap-4 mb-8">
          <button onClick={() => setScreen('home')} className="p-2 hover:bg-brand-gold/5 rounded-full text-brand-gold">
            <ChevronLeft size={24} />
          </button>
          <h2 className="text-3xl font-serif">İletişim & Deneyim</h2>
        </div>
      </motion.div>

      {/* Salon Gallery */}
      <section className="mb-12 -mx-6 px-6 flex gap-4 overflow-x-auto no-scrollbar snap-x">
        {images.map((img, i) => (
          <div key={i} className="min-w-[280px] h-64 rounded-[3rem] overflow-hidden shadow-xl snap-center relative group">
            <PremiumImage src={img} alt="Salon" className="w-full h-full hover:scale-105 transition-transform duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="mb-12">
        <div className="glass p-8 rounded-[2.5rem] border border-white/40 shadow-sm">
          <h3 className="text-xl font-serif mb-4 leading-tight">Salon Deneyimi</h3>
          <p className="text-sm text-brand-text-muted leading-relaxed opacity-80 mb-8">
            Sevara Beauty Studio’da müşterilerimize konforlu ve premium bir deneyim sunuyoruz. Her detay misafirlerimizin huzuru için tasarlandı.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="flex flex-col items-center gap-3 p-4 bg-brand-cream/30 rounded-[2rem]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                <Coffee size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Çay & Kahve</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-brand-cream/30 rounded-[2rem]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                <IceCream size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Soğuk İçecekler</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-brand-cream/30 rounded-[2rem]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                <LayoutGrid size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Bekleme Alanı</span>
            </div>
            <div className="flex flex-col items-center gap-3 p-4 bg-brand-cream/30 rounded-[2rem]">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-gold shadow-sm">
                <Star size={24} />
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">Premium Lounge</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section className="mb-12 space-y-6">
        <div className="glass p-8 rounded-[2.5rem] border border-white/40 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-brand-gold/10 text-brand-gold rounded-2xl">
              <MapPin size={24} />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Adresimiz</h4>
              <p className="text-sm text-brand-text-muted opacity-80 leading-relaxed">
                Nişantaşı Mahallesi, Abdi İpekçi Caddesi<br />No: 42, Kat: 3, Şişli / İstanbul
              </p>
            </div>
          </div>
          
          <div className="h-40 bg-brand-cream/50 rounded-[2rem] mb-6 overflow-hidden relative">
            <PremiumImage 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-full opacity-60 grayscale" 
              alt="Map" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-brand-text text-white p-4 rounded-3xl flex items-center gap-2 shadow-2xl">
                <Navigation size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold uppercase tracking-widest">Yol Tarifi Al</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button className="w-full h-16 glass rounded-2xl flex items-center justify-between px-6 border border-brand-border/10">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-brand-gold" />
                <span className="text-sm font-medium">0212 555 00 00</span>
              </div>
              <div className="w-8 h-8 bg-brand-gold/10 rounded-full flex items-center justify-center">
                <ArrowRight size={14} className="text-brand-gold" />
              </div>
            </button>
            <button className="w-full h-16 bg-[#25D366]/10 text-[#075E54] rounded-2xl flex items-center justify-between px-6 border border-[#25D366]/20">
              <div className="flex items-center gap-3">
                <MessageSquare size={18} />
                <span className="text-sm font-bold">WhatsApp Hattı</span>
              </div>
              <ExternalLink size={14} />
            </button>
            <button className="w-full h-16 bg-gradient-to-r from-[#833ab4]/10 via-[#fd1d1d]/10 to-[#fcb045]/10 text-[#833ab4] rounded-2xl flex items-center justify-between px-6 border border-[#833ab4]/20">
              <div className="flex items-center gap-3">
                <Instagram size={18} />
                <span className="text-sm font-bold">@sevarabeautystudio</span>
              </div>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>

        {/* Working Hours */}
        <div className="glass p-8 rounded-[2.5rem] border border-white/40 shadow-sm">
          <div className="flex items-center gap-4 mb-6">
            <Clock size={20} className="text-brand-gold" />
            <h4 className="font-bold text-lg">Çalışma Saatleri</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-brand-text-muted opacity-80">Pazartesi - Cumartesi</span>
              <span className="font-bold">09:00 - 20:00</span>
            </div>
            <div className="flex justify-between items-center text-sm opacity-50">
              <span className="text-brand-text-muted">Pazar</span>
              <span className="font-bold">Kapalı</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

import { 
  LOGO_URL, 
  SERVICES, 
  EXPERTS, 
  CAMPAIGNS 
} from './constants';

import { db, User as UserType, Appointment } from './services/db';

// --- Types ---
type Screen = 'splash' | 'login' | 'home' | 'services' | 'gallery' | 'profile' | 'booking' | 'notifications' | 'admin' | 'settings' | 'messages' | 'chat' | 'contact';

// --- Components ---

const PremiumImage = ({ 
  src, 
  alt, 
  className, 
  fallback = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800" 
}: { 
  src: string, 
  alt: string, 
  className?: string,
  fallback?: string
}) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  return (
    <div className={`relative overflow-hidden bg-brand-cream/50 ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-6 h-6 border-2 border-brand-gold/10 border-t-brand-gold rounded-full"
          />
        </div>
      )}
      <img
        src={error ? fallback : src}
        alt={alt}
        referrerPolicy="no-referrer"
        className={`w-full h-full object-cover transition-all duration-700 ${loading ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
      />
    </div>
  );
};

const TopBar = ({ title, onNotify, onContact }: { title: string, onNotify: () => void, onContact: () => void }) => (
  <header className="fixed top-0 w-full z-50 glass px-6 py-5 flex justify-between items-center shadow-sm">
    <div className="flex items-center gap-4">
      <motion.div 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={onContact}
        className="relative cursor-pointer"
      >
        <div className="absolute inset-0 bg-brand-gold/20 blur-lg rounded-full" />
        <img src={LOGO_URL} referrerPolicy="no-referrer" alt="Logo" className="relative w-12 h-12 rounded-full border-2 border-white premium-shadow object-cover" />
      </motion.div>
      <div className="flex flex-col cursor-pointer" onClick={onContact}>
        <h1 className="text-xl font-serif font-bold tracking-tight text-brand-gold leading-none">Sevara</h1>
        <span className="text-[9px] uppercase tracking-[0.2em] text-brand-text-muted font-bold mt-1">Beauty Studio</span>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <button onClick={onContact} className="p-2.5 text-brand-gold hover:bg-brand-gold/5 rounded-full transition-all">
        <MapPin size={22} />
      </button>
      <button onClick={onNotify} className="relative p-2.5 text-brand-gold hover:bg-brand-gold/5 rounded-full transition-all">
        <Bell size={22} />
        <motion.span 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-2 right-2 w-2.5 h-2.5 bg-brand-gold-soft rounded-full border-2 border-white" 
        />
      </button>
    </div>
  </header>
);

const BottomNav = ({ current, setScreen }: { current: Screen, setScreen: (s: Screen) => void }) => {
  const items = [
    { id: 'home', label: 'Ana Sayfa', icon: Home },
    { id: 'services', label: 'Hizmetler', icon: Scissors },
    { id: 'messages', label: 'Mesajlar', icon: MessageSquare },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 w-full z-50 glass shadow-[0_-10px_40px_rgba(0,0,0,0.05)] flex justify-around items-center h-24 pb-8 px-6">
      {items.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => setScreen(id as Screen)}
          className={`relative flex flex-col items-center gap-1.5 transition-all duration-500 ${
            current === id ? 'text-brand-gold' : 'text-brand-text-muted opacity-40 hover:opacity-100'
          }`}
        >
          {current === id && (
            <motion.div 
              layoutId="nav-bg"
              className="absolute -top-1 w-12 h-1 bg-brand-gold rounded-full"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className={`transition-transform duration-500 ${current === id ? 'scale-110' : 'scale-100'}`}>
            <Icon size={26} strokeWidth={current === id ? 2.5 : 2} />
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.15em]">{label}</span>
        </button>
      ))}
    </nav>
  );
};

// --- Screen Components ---

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="h-screen w-full flex flex-col items-center justify-center bg-[#fbf9f7]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative flex flex-col items-center"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
          className="w-40 h-40 mb-12 relative flex items-center justify-center"
        >
          <div className="absolute inset-0 bg-brand-gold/5 blur-3xl rounded-full" />
          <img src={LOGO_URL} referrerPolicy="no-referrer" alt="Logo" className="relative w-full h-full object-contain" />
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-brand-gold/10 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-brand-gold/5 rounded-full border-dashed"
          />
        </motion.div>

        <div className="overflow-hidden h-8 mb-4">
          <motion.h1
            initial={{ y: 40 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
            className="text-2xl font-serif tracking-[0.2em] text-brand-gold font-bold uppercase"
          >
            Sevara
          </motion.h1>
        </div>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ delay: 1, duration: 1 }}
          className="h-px bg-brand-gold mb-4"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="text-[10px] uppercase tracking-[0.5em] text-brand-text-muted font-bold"
        >
          Beauty Studio
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-12 text-[9px] uppercase tracking-widest text-brand-text-muted opacity-40 font-bold"
      >
        Exclusive Care Experience
      </motion.div>
    </div>
  );
};

const LoginScreen = ({ setScreen, setUser }: { setScreen: (s: Screen) => void, setUser: (u: UserType) => void }) => {
  const [email, setEmail] = useState('tsevarr@gmail.com');
  
  const handleLogin = () => {
    const user = db.getCurrentUser();
    setUser(user);
    setScreen('home');
  };

  return (
    <div className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=1000')] bg-cover bg-center brightness-90" />
      <div className="absolute inset-0 bg-brand-cream/60 backdrop-blur-xl" />
      
      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="relative z-10 w-full max-w-md glass p-10 rounded-[2rem] shadow-2xl"
      >
        <div className="flex justify-center mb-8">
          <img src={LOGO_URL} referrerPolicy="no-referrer" alt="Logo" className="w-24 h-24 rounded-full shadow-lg" />
        </div>
        <h2 className="text-3xl font-serif text-center mb-2">Hoş Geldiniz</h2>
        <p className="text-brand-text-muted text-center mb-8">Güzellik ritüelinize kaldığınız yerden devam edin.</p>
        
        <div className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold opacity-60" size={20} />
            <input 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/40 border border-brand-border/30 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all" 
              placeholder="E-posta" 
            />
          </div>
          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gold opacity-60" size={20} />
            <input type="password" value="password" readOnly className="w-full bg-white/40 border border-brand-border/30 rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-gold outline-none transition-all" placeholder="Şifre" />
          </div>
          <button 
            onClick={handleLogin}
            className="w-full bg-brand-gold text-white py-4 rounded-full font-bold shadow-lg hover:scale-[0.98] transition-all flex items-center justify-center gap-2"
          >
            Giriş Yap <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="mt-8 flex items-center gap-4 text-brand-text-muted">
          <div className="flex-1 h-px bg-brand-border/30" />
          <span className="text-sm">veya</span>
          <div className="flex-1 h-px bg-brand-border/30" />
        </div>
        
        <div className="mt-8 space-y-3">
          <button onClick={handleLogin} className="w-full py-3.5 border border-brand-border/30 rounded-full flex items-center justify-center gap-2 hover:bg-white/40 transition-all font-semibold">
            Google ile Giriş Yap
          </button>
        </div>
      </motion.div>
    </div>
  );
};

const HomeScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  return (
    <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto overflow-x-hidden">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-serif mb-1 leading-tight">Hoş geldiniz, Sevara</h1>
        <p className="text-brand-text-muted opacity-70 mb-8 font-medium">Güzellik ritüeliniz bugün nasıl başlasın?</p>
      </motion.div>

      <section className="mb-12 -mx-6 px-6 flex gap-5 overflow-x-auto no-scrollbar snap-x">
        {CAMPAIGNS.map((c, i) => (
          <div key={i} className="min-w-[300px] aspect-[16/10] rounded-[2.5rem] overflow-hidden relative snap-center shadow-2xl group border border-white/20">
            <PremiumImage src={c.img} alt={c.title} className="w-full h-full transition-transform group-hover:scale-105 duration-1000" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8">
              <span className={`text-[9px] ${c.color} text-white px-3 py-1.5 rounded-xl w-max mb-3 font-bold tracking-[0.2em] uppercase shadow-sm backdrop-blur-sm border border-white/10`}>
                Kampanya
              </span>
              <h3 className="text-2xl font-bold text-white font-serif mb-1 tracking-tight">{c.title}</h3>
              <p className="text-[11px] text-white/70 font-medium leading-relaxed max-w-[220px]">{c.desc}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setScreen('booking')}
          className="w-full h-24 bg-brand-text text-white rounded-[2rem] font-serif text-2xl flex items-center justify-center gap-4 shadow-[0_25px_50px_rgba(0,0,0,0.2)] active:shadow-lg transition-all group relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <Calendar className="group-hover:rotate-12 transition-transform duration-500" size={28} /> 
          <span className="relative z-10">Hemen Randevu Al</span>
        </motion.button>
      </section>

      <section className="mb-12">
        <div className="flex justify-between items-end mb-6">
          <h2 className="text-2xl font-serif">Popüler İşlemler</h2>
          <div className="flex gap-4">
            <button className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em] border-b border-brand-gold/20 pb-1" onClick={() => setScreen('services')}>Hepsine Göz At</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.slice(0, 2).map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -8 }}
              onClick={() => setScreen('services')}
              className="glass rounded-[3rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer group border-2 border-white/80"
            >
              <div className="aspect-[16/10] relative overflow-hidden">
                <PremiumImage src={s.img} alt={s.name} className="w-full h-full transition-transform group-hover:scale-110 duration-1000" />
                <div className="absolute top-4 left-4 glass px-3 py-1.5 rounded-xl text-[9px] font-bold uppercase tracking-widest text-brand-gold flex items-center gap-1.5 backdrop-blur-md border border-white/50">
                  <Star size={10} fill="currentColor" /> {s.category}
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-serif text-xl leading-tight mb-3 tracking-tight">{s.name}</h3>
                <div className="flex justify-between items-center pt-4 border-t border-brand-border/10">
                  <div className="flex items-center gap-2 text-[10px] text-brand-text-muted font-bold uppercase tracking-widest opacity-60">
                    <Clock size={10} className="text-brand-gold" /> <span>{s.duration} DK</span>
                  </div>
                  <span className="text-xl font-serif font-bold text-brand-text">₺{s.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-serif">Uzmanlarımız</h2>
        </div>
        <div className="flex gap-8 overflow-x-auto no-scrollbar py-4 -mx-2 px-2">
          {EXPERTS.map((e, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center min-w-[90px] group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-brand-gold/10 mb-4 shadow-xl group-hover:border-brand-gold/40 transition-all p-1.5 bg-white backdrop-blur-md">
                <PremiumImage src={e.img} className="w-full h-full rounded-full" alt={e.name} />
              </div>
              <span className="text-sm font-bold text-center leading-tight mb-1">{e.name}</span>
              <span className="text-[9px] text-brand-text-muted text-center uppercase tracking-[0.2em] font-bold opacity-60">{e.role}</span>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

const ServicesScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState('Tümü');
  const categories = ['Tümü', 'Göz & Kaş', 'Cilt Bakımı', 'El & Ayak', 'Klinik'];
  
  const filteredServices = activeTab === 'Tümü' 
    ? SERVICES 
    : SERVICES.filter(s => s.category === activeTab);

  return (
    <div className="pt-28 pb-32 px-6 max-w-4xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 10 }} 
        animate={{ opacity: 1, y: 0 }}
        className="mb-10 text-center md:text-left"
      >
        <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.3em] mb-3 block">Beauty & Beyond</span>
        <h2 className="text-4xl font-serif leading-tight">İmza Ritüellerimiz</h2>
      </motion.div>
      
      <div className="flex gap-3 overflow-x-auto no-scrollbar mb-12 -mx-6 px-6 py-2">
        {categories.map((cat, i) => (
          <button 
            key={i} 
            onClick={() => setActiveTab(cat)}
            className={`whitespace-nowrap px-8 py-3.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-500 ${
              activeTab === cat 
                ? 'bg-brand-text text-white shadow-2xl scale-105' 
                : 'bg-white/50 backdrop-blur-md text-brand-text-muted border border-brand-border/10 hover:border-brand-gold/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AnimatePresence mode="popLayout">
          {filteredServices.map((s) => (
            <motion.div 
              key={s.id} 
              layout
              initial={{ y: 30, opacity: 0 }} 
              animate={{ y: 0, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="premium-card relative group flex flex-col h-full"
            >
              <div className="glass rounded-[3.5rem] overflow-hidden shadow-2xl border border-white/60 flex flex-col w-full h-full premium-shadow bg-white/10 backdrop-blur-xl">
                <div className="aspect-[4/3] relative overflow-hidden flex-shrink-0 group">
                  <PremiumImage 
                    src={s.img} 
                    className="w-full h-full transition-transform duration-[2.5s] ease-out group-hover:scale-110" 
                    alt={s.name} 
                  />
                  <div className="absolute top-6 right-6 glass p-4 rounded-full text-brand-gold shadow-lg backdrop-blur-2xl border border-white/50">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <div className="absolute bottom-6 left-6 glass px-6 py-3 rounded-2xl text-[10px] font-bold uppercase tracking-[0.25em] text-brand-gold backdrop-blur-2xl border border-white/50">
                    {s.category}
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </div>
                
                <div className="p-12 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex-1">
                      <h3 className="text-3xl font-serif mb-4 leading-[1.1] tracking-tight">{s.name}</h3>
                      <div className="flex items-center gap-5 text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] opacity-50">
                        <div className="flex items-center gap-2">
                          <Clock size={12} className="text-brand-gold" /> <span>{s.duration} DK</span>
                        </div>
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-gold/30" />
                        <div className="flex items-center gap-2">
                          <Smile size={12} className="text-brand-gold" /> <span>Premium</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-brand-text-muted mb-12 leading-loose opacity-80 flex-1 font-medium">
                    {s.desc}
                  </p>
                  
                  <div className="flex items-center justify-between pt-8 border-t border-brand-border/10">
                    <div className="flex flex-col">
                      <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-widest opacity-40 mb-1">Ritüel Bedeli</span>
                      <span className="text-3xl font-serif font-bold text-brand-text italic">₺{s.price}</span>
                    </div>
                    
                    <motion.button 
                      whileHover={{ scale: 1.05, backgroundColor: '#735c00' }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setScreen('booking')}
                      className="px-10 py-5 rounded-3xl bg-brand-text text-white font-bold uppercase tracking-[0.25em] text-[10px] shadow-[0_20px_40px_rgba(0,0,0,0.15)] flex items-center justify-center gap-4 transition-all duration-500"
                    >
                      Şimdi Keşfet <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const GalleryScreen = () => (
  <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-3xl font-serif mb-8 text-center md:text-left leading-tight">İlham Alın</h2>
    </motion.div>
    
    <div className="grid grid-cols-1 gap-10">
      {[1, 2].map(i => (
        <motion.div 
          key={i} 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="premium-card"
        >
          <div className="glass rounded-[3rem] overflow-hidden shadow-lg border border-white/40">
            <div className="flex h-72 bg-brand-cream overflow-hidden">
              <div className="w-1/2 relative group">
                <PremiumImage src={i === 1 ? "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=400" : "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?auto=format&fit=crop&q=80&w=400"} alt="Öncesi" className="w-full h-full grayscale-[0.3] group-hover:grayscale-0 transition-all duration-700" />
                <span className="absolute top-6 left-6 glass px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest opacity-80 backdrop-blur-md">Öncesi</span>
              </div>
              <div className="w-1/2 relative border-l-4 border-white/50 group">
                <PremiumImage src={i === 1 ? "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=400" : "https://images.unsplash.com/photo-1629731633519-61da127ae85d?auto=format&fit=crop&q=80&w=400"} alt="Sonrası" className="w-full h-full group-hover:scale-110 transition-transform duration-[2s]" />
                <div className="absolute inset-0 bg-brand-gold/5" />
                <span className="absolute top-6 right-6 bg-brand-gold text-white px-4 py-1.5 rounded-full text-[9px] font-bold uppercase tracking-widest shadow-lg">Sonrası</span>
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-serif mb-2 leading-tight">{i === 1 ? 'Cilt Yenileme Ritüeli' : 'Bakış Tasarımı (PMU)'}</h3>
              <p className="text-sm text-brand-text-muted leading-relaxed opacity-70">
                {i === 1 
                  ? 'Derinlemesine temizlik ve yoğun nem terapisi ile cildinize nefes aldırıyoruz.' 
                  : 'Kişiye özel pigment analizi ile doğal ve belirgin bakışların sanatsal dönüşümü.'}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const ProfileScreen = ({ user, setScreen }: { user: UserType, setScreen: (s: Screen) => void }) => {
  const menu = [
    { icon: Clock, label: "Geçmiş Randevularım", onClick: () => {} },
    { icon: Star, label: "Favori İşlemlerim", onClick: () => {} },
    { icon: Settings, label: "Uygulama Ayarları", onClick: () => setScreen('settings') },
  ];

  if (user.role === 'admin') {
    menu.unshift({ icon: Shield, label: "Admin Paneli", onClick: () => setScreen('admin') });
  }

  return (
    <div className="pt-24 pb-32 px-5 max-w-2xl mx-auto flex flex-col items-center">
      <div className="relative mb-6">
        <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden glass p-1">
          <PremiumImage src="https://images.unsplash.com/photo-1559599101-304221938959?auto=format&fit=crop&q=80&w=400" alt="Profil" className="w-full h-full rounded-full" />
        </div>
        <button className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg border border-brand-border/20 text-brand-gold hover:scale-110 transition-transform">
          <Brush size={16} />
        </button>
      </div>
      
      <h2 className="text-2xl font-serif mb-1">{user.name}</h2>
      <p className="text-sm text-brand-text-muted mb-8 italic">{user.email}</p>

      <div className="w-full glass rounded-[2rem] p-6 mb-8 flex items-center gap-5 shadow-sm border border-white/40">
        <div className="w-16 h-16 rounded-2xl bg-brand-gold/5 flex items-center justify-center text-brand-gold">
          <Star fill="currentColor" size={32} className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]" />
        </div>
        <div>
          <p className="text-[10px] text-brand-text-muted uppercase tracking-widest font-bold mb-1 opacity-60">Sevara Sadakat Puanı</p>
          <p className="text-2xl font-bold text-brand-gold">{user.points} <span className="text-sm font-normal text-brand-text-muted">Sevara Puan</span></p>
        </div>
      </div>

      <div className="w-full glass rounded-[2.5rem] overflow-hidden shadow-sm mb-8">
        {menu.map((item, i) => (
          <button key={i} onClick={item.onClick} className="w-full flex items-center justify-between p-6 hover:bg-brand-cream/40 transition-all border-b border-brand-border/10 last:border-b-0 group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-cream/50 flex items-center justify-center text-brand-text-muted group-hover:text-brand-gold transition-colors">
                <item.icon size={20} />
              </div>
              <span className="font-semibold">{item.label}</span>
            </div>
            <ChevronRight size={18} className="text-brand-border group-hover:translate-x-1 transition-transform" />
          </button>
        ))}
      </div>

      <button 
        onClick={() => setScreen('login')}
        className="w-full py-5 rounded-2xl border border-red-100 bg-white text-brand-text flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-200 transition-all shadow-sm"
      >
        <LogOut className="text-red-500" size={20} /> <span className="font-bold">Oturumu Kapat</span>
      </button>
    </div>
  );
};

const BookingScreen = ({ user, setScreen }: { user: UserType, setScreen: (s: Screen) => void }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(SERVICES[2]);
  const [selectedExpert, setSelectedExpert] = useState(EXPERTS[0]);
  const [selectedDate, setSelectedDate] = useState(18);
  const [selectedTime, setSelectedTime] = useState('11:30');
  const [isConfirming, setIsConfirming] = useState(false);

  const days = [
    { day: 'Pzt', date: 16 },
    { day: 'Sal', date: 17 },
    { day: 'Çar', date: 18 },
    { day: 'Per', date: 19 },
    { day: 'Cum', date: 20 }
  ];

  const handleBooking = () => {
    setIsConfirming(true);
    setTimeout(() => {
      db.createAppointment({
        userId: user.id,
        serviceId: selectedService.id,
        expertId: selectedExpert.id,
        date: selectedDate,
        time: selectedTime,
        price: selectedService.price
      });
      setScreen('home');
    }, 1500);
  };

  return (
    <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-serif mb-2 leading-tight">Randevu Planla</h2>
        <p className="text-sm text-brand-text-muted mb-10 opacity-70">Ritüeliniz için detayları belirleyin.</p>
      </motion.div>

      <div className="space-y-6 mb-12">
        {/* Step 1: Service */}
        <button onClick={() => setStep(1)} className={`w-full text-left glass p-6 rounded-[2.5rem] flex items-center gap-5 shadow-sm border transition-all ${step === 1 ? 'border-brand-gold ring-2 ring-brand-gold/10' : 'border-brand-border/10'} relative overflow-hidden group`}>
          <div className="w-16 h-16 rounded-[1.5rem] bg-brand-gold/5 flex items-center justify-center text-brand-gold flex-shrink-0 shadow-inner">
            <Scissors size={28} />
          </div>
          <div className="flex-1">
            <p className="text-[9px] uppercase font-bold text-brand-gold tracking-[0.2em] mb-1">Ritüel Seçimi</p>
            <h3 className="text-xl font-serif">{selectedService.name}</h3>
            <p className="text-[11px] font-bold text-brand-text-muted mt-1 opacity-60 uppercase tracking-widest">{selectedService.duration} DK • ₺{selectedService.price}</p>
          </div>
          {step !== 1 && <ChevronRight size={20} className="text-brand-border" />}
        </button>

        {step === 1 && (
          <div className="grid grid-cols-1 gap-3 py-2">
            {SERVICES.slice(0, 4).map(s => (
              <button 
                key={s.id} 
                onClick={() => { setSelectedService(s); setStep(2); }}
                className={`p-4 rounded-2xl border text-left flex justify-between items-center transition-all ${selectedService.id === s.id ? 'bg-brand-gold text-white border-transparent' : 'bg-white border-brand-border/10 text-brand-text'}`}
              >
                <span className="font-medium">{s.name}</span>
                <span className="text-xs opacity-70">₺{s.price}</span>
              </button>
            ))}
          </div>
        )}

        {/* Step 2: Expert */}
        <button onClick={() => setStep(2)} className={`w-full text-left glass p-6 rounded-[2.5rem] flex items-center gap-5 shadow-sm border transition-all ${step === 2 ? 'border-brand-gold ring-2 ring-brand-gold/10' : 'border-brand-border/10'} relative overflow-hidden group`}>
          <div className="w-16 h-16 rounded-[1.5rem] overflow-hidden glass p-1 flex-shrink-0">
            <img src={selectedExpert.img} referrerPolicy="no-referrer" className="w-full h-full object-cover rounded-[1.2rem]" alt="Uzman" />
          </div>
          <div className="flex-1">
            <p className="text-[9px] uppercase font-bold text-brand-gold tracking-[0.2em] mb-1">Uzmanımız</p>
            <h3 className="text-xl font-serif">{selectedExpert.name}</h3>
            <p className="text-[11px] font-bold text-brand-text-muted mt-1 opacity-60 uppercase tracking-widest">{selectedExpert.role}</p>
          </div>
          {step !== 2 && <ChevronRight size={20} className="text-brand-border" />}
        </button>

        {step === 2 && (
          <div className="grid grid-cols-2 gap-4 py-2">
            {EXPERTS.map(e => (
              <button 
                key={e.id} 
                onClick={() => { setSelectedExpert(e); setStep(3); }}
                className={`p-4 rounded-2xl border flex flex-col items-center gap-2 transition-all ${selectedExpert.id === e.id ? 'bg-brand-gold text-white border-transparent' : 'bg-white border-brand-border/10 text-brand-text'}`}
              >
                <img src={e.img} referrerPolicy="no-referrer" className="w-12 h-12 rounded-full object-cover" alt="" />
                <span className="text-xs font-bold">{e.name}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-2xl font-serif">Tarih ve Saat</h3>
          <span className="text-[10px] font-bold text-brand-gold border-b border-brand-gold/30 tracking-widest uppercase">MAYIS 2026</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-10 -mx-6 px-6">
          {days.map((d, i) => (
            <motion.button 
              key={i} 
              onClick={() => setSelectedDate(d.date)}
              whileHover={{ y: -5 }}
              className={`flex-shrink-0 w-20 h-28 rounded-[2rem] flex flex-col items-center justify-center gap-2 transition-all duration-500 border ${
                selectedDate === d.date 
                  ? 'bg-brand-text text-white shadow-2xl scale-110 border-transparent' 
                  : 'glass border-brand-border/10 hover:border-brand-gold/30'
              }`}
            >
              <span className={`text-[10px] uppercase font-bold tracking-widest ${selectedDate === d.date ? 'text-white/60' : 'text-brand-text-muted opacity-40'}`}>
                {d.day}
              </span>
              <span className="text-2xl font-serif font-bold">{d.date}</span>
            </motion.button>
          ))}
        </div>

        <div className="grid grid-cols-3 gap-4">
          {['09:00', '10:00', '11:00', '13:00', '14:30', '16:00'].map((t, i) => (
            <motion.button 
              key={i} 
              onClick={() => setSelectedTime(t)}
              whileTap={{ scale: 0.95 }}
              disabled={i === 0 || i === 5}
              className={`py-5 rounded-[1.5rem] text-xs font-bold uppercase tracking-widest transition-all duration-500 border ${
                selectedTime === t 
                  ? 'bg-brand-gold text-white shadow-xl border-transparent' 
                  : i === 0 || i === 5 
                    ? 'opacity-20 cursor-not-allowed bg-brand-border/5' 
                    : 'glass border-brand-border/10 hover:border-brand-gold/40'
              }`}
            >
              {t}
            </motion.button>
          ))}
        </div>
      </section>

      <div className="glass p-8 rounded-[3rem] shadow-2xl border-2 border-white flex flex-col gap-8 premium-shadow">
        <div className="flex justify-between items-center px-4">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] opacity-60">Toplam Tutar</span>
            <span className="text-3xl font-serif text-brand-gold font-bold">₺{selectedService.price}</span>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] opacity-60">Sadakat Getirisi</span>
            <p className="text-brand-gold-soft font-bold text-sm">+{selectedService.price / 10} Sevara Puan</p>
          </div>
        </div>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleBooking}
          disabled={isConfirming}
          className="w-full bg-brand-text text-white py-6 rounded-[2rem] font-bold uppercase tracking-[0.2em] text-xs shadow-2xl flex items-center justify-center gap-3 active:scale-95 transition-all overflow-hidden relative"
        >
          {isConfirming ? (
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
            />
          ) : (
            <>Rezervasyonu Onayla <Check size={20} className="text-brand-gold" /></>
          )}
        </motion.button>
        
        <p className="text-[9px] text-center text-brand-text-muted px-8 font-medium leading-relaxed opacity-50">
          Onaylayarak iptal politikamızı ve Sevara Sadakat Programı kullanım koşullarımızı kabul etmiş olursunuz.
        </p>
      </div>
    </div>
  );
};

const AdminScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => {
  const [activeTab, setActiveTab] = useState<'appointments' | 'services' | 'users'>('appointments');
  const appts = db.getAllAppointments();

  return (
    <div className="pt-28 pb-32 px-6 max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button onClick={() => setScreen('profile')} className="p-2 hover:bg-brand-gold/5 rounded-full text-brand-gold">
          <ChevronLeft size={24} />
        </button>
        <h2 className="text-3xl font-serif">Yönetim Paneli</h2>
      </div>

      <div className="flex gap-4 mb-10 overflow-x-auto no-scrollbar">
        {[
          { id: 'appointments', label: 'Randevular', icon: Calendar },
          { id: 'services', label: 'Hizmetler', icon: Scissors },
          { id: 'users', label: 'Kullanıcılar', icon: User }
        ].map(tab => (
          <button 
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all ${
              activeTab === tab.id ? 'bg-brand-text text-white shadow-lg' : 'glass text-brand-text-muted'
            }`}
          >
            <tab.icon size={16} />
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'appointments' && (
        <div className="space-y-4">
          {appts.length === 0 ? (
            <div className="text-center py-20 glass rounded-[2.5rem] opacity-50 font-medium">Henüz randevu bulunmuyor.</div>
          ) : (
            appts.map(apt => (
              <div key={apt.id} className="glass p-6 rounded-[2rem] flex items-center justify-between shadow-sm border border-brand-border/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/5 flex items-center justify-center text-brand-gold">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">{SERVICES.find(s => s.id === apt.serviceId)?.name}</h4>
                    <p className="text-[10px] text-brand-text-muted uppercase tracking-widest opacity-60">
                      Mayıs {apt.date} • {apt.time} • {EXPERTS.find(e => e.id === apt.expertId)?.name}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                    apt.status === 'confirmed' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    {apt.status === 'confirmed' ? 'Onaylandı' : 'Bekliyor'}
                  </span>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => db.updateAppointmentStatus(apt.id, 'confirmed')} className="p-2 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors">
                      <Check size={16} />
                    </button>
                    <button onClick={() => db.updateAppointmentStatus(apt.id, 'cancelled')} className="p-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === 'services' && (
        <div className="space-y-4">
          <button className="w-full p-6 border-2 border-dashed border-brand-border/20 rounded-[2rem] text-brand-text-muted flex items-center justify-center gap-3 hover:border-brand-gold hover:text-brand-gold transition-all">
            <Plus size={24} /> Yeni Hizmet Ekle
          </button>
          {SERVICES.map(s => (
            <div key={s.id} className="glass p-6 rounded-[2rem] flex items-center justify-between shadow-sm border border-brand-border/10">
              <div className="flex items-center gap-4">
                <PremiumImage src={s.img} alt={s.name} className="w-14 h-14 rounded-2xl shadow-sm" />
                <div>
                  <h4 className="font-bold text-sm">{s.name}</h4>
                  <p className="text-[10px] text-brand-text-muted uppercase tracking-widest font-bold opacity-60">₺{s.price} • {s.duration} dk</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2.5 bg-brand-cream/80 text-brand-gold rounded-xl hover:bg-white transition-colors shadow-sm"><Brush size={16} /></button>
                <button className="p-2.5 bg-red-50 text-red-600 rounded-xl hover:bg-red-100 transition-colors shadow-sm"><Trash2 size={16} /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const NotificationsScreen = () => (
  <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
      <h2 className="text-3xl font-serif mb-2 leading-tight">Bildirimler</h2>
      <p className="text-sm text-brand-text-muted mb-10 opacity-70">Güzellik dünyamızdan en son haberler.</p>
    </motion.div>
    
    <div className="space-y-4">
      {[
        { title: 'Yeni Hizmet!', desc: 'Yaz mevsimine özel cilt bakım ritüellerimiz başladı.', time: '2 saat önce' },
        { title: 'Randevu Hatırlatıcı', desc: 'Yarın saat 14:30\'da randevunuz bulunmaktadır.', time: '1 gün önce' }
      ].map((n, i) => (
        <div key={i} className="glass p-6 rounded-[2rem] border border-white/40 shadow-sm">
          <div className="flex justify-between items-start mb-2">
            <h4 className="font-bold">{n.title}</h4>
            <span className="text-[10px] text-brand-text-muted opacity-60 uppercase">{n.time}</span>
          </div>
          <p className="text-sm text-brand-text-muted leading-relaxed opacity-80">{n.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

const SettingsScreen = ({ setScreen }: { setScreen: (s: Screen) => void }) => (
  <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <button onClick={() => setScreen('profile')} className="p-2 hover:bg-brand-gold/5 rounded-full text-brand-gold">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-3xl font-serif">Ayarlar</h2>
    </div>

    <div className="space-y-6">
      <section>
        <h3 className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] mb-4 ml-2 opacity-50">Hesap</h3>
        <div className="glass rounded-[2rem] overflow-hidden">
          <button className="w-full flex items-center justify-between p-6 hover:bg-brand-cream/40 transition-all border-b border-brand-border/10">
            <span className="font-medium">Profil Bilgileri</span>
            <ChevronRight size={18} className="text-brand-border" />
          </button>
          <button className="w-full flex items-center justify-between p-6 hover:bg-brand-cream/40 transition-all">
            <span className="font-medium">Şifre Değiştir</span>
            <ChevronRight size={18} className="text-brand-border" />
          </button>
        </div>
      </section>

      <section>
        <h3 className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] mb-4 ml-2 opacity-50">Bildirimler</h3>
        <div className="glass rounded-[2rem] p-6 space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-medium">Push Bildirimleri</span>
            <div className="w-12 h-6 bg-brand-gold rounded-full relative p-1">
              <div className="w-4 h-4 bg-white rounded-full absolute right-1" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-medium">Kampanya Mailleri</span>
            <div className="w-12 h-6 bg-brand-border/30 rounded-full relative p-1">
              <div className="w-4 h-4 bg-white rounded-full absolute left-1" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] mb-4 ml-2 opacity-50">Hakkında</h3>
        <div className="glass rounded-[2rem] overflow-hidden">
          <button className="w-full flex items-center justify-between p-6 hover:bg-brand-cream/40 transition-all border-b border-brand-border/10">
            <span className="font-medium">Kullanım Koşulları</span>
            <ChevronRight size={18} className="text-brand-border" />
          </button>
          <button className="w-full flex items-center justify-between p-6 hover:bg-brand-cream/40 transition-all">
            <span className="font-medium">Gizlilik Politikası</span>
            <ChevronRight size={18} className="text-brand-border" />
          </button>
        </div>
      </section>
    </div>
  </div>
);

const MessagesScreen = ({ user, setScreen, setChatPartner }: { user: UserType, setScreen: (s: Screen) => void, setChatPartner: (id: string) => void }) => {
  const conversations = db.getConversations(user.id);

  return (
    <div className="pt-28 pb-32 px-6 max-w-2xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <h2 className="text-3xl font-serif mb-2 leading-tight">Mesajlar</h2>
        <p className="text-sm text-brand-text-muted mb-10 opacity-70">Salonumuz ve uzmanlarımızla iletişim kurun.</p>
      </motion.div>

      <div className="space-y-4">
        {conversations.length === 0 ? (
          <div className="text-center py-20 glass rounded-[2.5rem] opacity-50 font-medium">Henüz mesajınız bulunmuyor.</div>
        ) : (
          conversations.map((conv, i) => {
            const partner = conv.partnerId === 'salon' ? { name: 'Sevara Studio', img: LOGO_URL } : EXPERTS.find(e => e.id === conv.partnerId) || { name: 'Uzman', img: LOGO_URL };
            return (
              <motion.button 
                key={i}
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                onClick={() => { setChatPartner(conv.partnerId); setScreen('chat'); }}
                className="w-full glass p-6 rounded-[2rem] flex items-center gap-4 shadow-sm border border-white/40 hover:shadow-md transition-all text-left"
              >
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-brand-gold/10">
                  <PremiumImage src={partner.img} alt={partner.name} className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className="font-bold text-lg truncate">{partner.name}</h4>
                    <span className="text-[10px] text-brand-text-muted opacity-60">{new Date(conv.lastMsg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                  <p className="text-sm text-brand-text-muted truncate opacity-80">{conv.lastMsg.text}</p>
                </div>
                {!conv.lastMsg.read && conv.lastMsg.receiverId === user.id && (
                  <div className="w-2.5 h-2.5 bg-brand-gold rounded-full" />
                )}
              </motion.button>
            );
          })
        )}
      </div>

      <div className="mt-12">
        <h3 className="text-[10px] font-bold text-brand-text-muted uppercase tracking-[0.2em] mb-4 ml-2 opacity-50">Uzmanlarımıza Yazın</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {EXPERTS.map((e, i) => (
            <button 
              key={i}
              onClick={() => { setChatPartner(e.id); setScreen('chat'); }}
              className="flex flex-col items-center min-w-[80px]"
            >
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-brand-gold/10 mb-2">
                <PremiumImage src={e.img} alt={e.name} className="w-full h-full" />
              </div>
              <span className="text-[10px] font-bold truncate w-full text-center">{e.name}</span>
            </button>
          ))}
          <button 
            onClick={() => { setChatPartner('salon'); setScreen('chat'); }}
            className="flex flex-col items-center min-w-[80px]"
          >
            <div className="w-16 h-16 rounded-full bg-brand-gold/5 flex items-center justify-center border-2 border-brand-gold/10 mb-2 text-brand-gold">
              <MessageSquare size={24} />
            </div>
            <span className="text-[10px] font-bold">Salon</span>
          </button>
        </div>
      </div>
    </div>
  );
};

const ChatDetailScreen = ({ user, partnerId, setScreen }: { user: UserType, partnerId: string, setScreen: (s: Screen) => void }) => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState(db.getMessages(user.id, partnerId));
  const partner = partnerId === 'salon' ? { name: 'Sevara Studio', img: LOGO_URL } : EXPERTS.find(e => e.id === partnerId) || { name: 'Uzman', img: LOGO_URL };

  const handleSend = () => {
    if (!text.trim()) return;
    db.sendMessage(user.id, partnerId, text);
    setMessages(db.getMessages(user.id, partnerId));
    setText('');
    
    // Auto-reply simulation for salon
    if (partnerId === 'salon') {
      setTimeout(() => {
        db.sendMessage('salon', user.id, 'Mesajınız ulaştı, en kısa sürede ekibimiz size geri dönüş yapacaktır. Teşekkürler!');
        setMessages(db.getMessages(user.id, partnerId));
      }, 1000);
    }
  };

  return (
    <div className="h-full flex flex-col pt-24 bg-brand-cream/30">
      <div className="fixed top-0 w-full z-[60] glass px-6 py-5 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-4">
          <button onClick={() => setScreen('messages')} className="p-2 hover:bg-brand-gold/5 rounded-full text-brand-gold">
            <ChevronLeft size={24} />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-brand-gold/10">
            <PremiumImage src={partner.img} alt={partner.name} className="w-full h-full" />
          </div>
          <div>
            <h4 className="font-bold text-sm">{partner.name}</h4>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
              <span className="text-[9px] uppercase tracking-widest text-brand-text-muted opacity-60">Çevrimiçi</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar pb-32">
        {messages.map((m, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            className={`flex ${m.senderId === user.id ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[75%] p-4 rounded-3xl text-sm shadow-sm ${
              m.senderId === user.id 
                ? 'bg-brand-text text-white rounded-br-none' 
                : 'glass text-brand-text rounded-bl-none'
            }`}>
              {m.text}
              <div className={`text-[8px] mt-1 opacity-50 ${m.senderId === user.id ? 'text-right' : 'text-left'}`}>
                {new Date(m.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="fixed bottom-0 w-full p-6 glass border-t border-brand-border/10">
        <div className="flex gap-3 bg-white/40 rounded-full p-1.5 border border-brand-border/20 shadow-inner">
          <input 
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mesajınızı yazın..." 
            className="flex-1 bg-transparent px-5 py-3 outline-none text-sm"
          />
          <button 
            onClick={handleSend}
            className="w-11 h-11 bg-brand-gold text-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');
  const [user, setUser] = useState<UserType | null>(null);
  const [chatPartnerId, setChatPartnerId] = useState<string | null>(null);

  const handleScreenChange = (newScreen: Screen) => {
    setScreen(newScreen);
  };

  const renderScreen = () => {
    if (screen === 'splash') return <SplashScreen onComplete={() => handleScreenChange('login')} />;
    if (screen === 'login') return <LoginScreen setScreen={handleScreenChange} setUser={setUser} />;
    
    // Auth Guard
    if (!user) return <LoginScreen setScreen={handleScreenChange} setUser={setUser} />;

    switch (screen) {
      case 'home': return <HomeScreen setScreen={handleScreenChange} />;
      case 'services': return <ServicesScreen setScreen={handleScreenChange} />;
      case 'gallery': return <GalleryScreen />;
      case 'profile': return <ProfileScreen user={user} setScreen={handleScreenChange} />;
      case 'booking': return <BookingScreen user={user} setScreen={handleScreenChange} />;
      case 'notifications': return <NotificationsScreen />;
      case 'admin': return <AdminScreen setScreen={handleScreenChange} />;
      case 'settings': return <SettingsScreen setScreen={handleScreenChange} />;
      case 'messages': return <MessagesScreen user={user} setScreen={handleScreenChange} setChatPartner={setChatPartnerId} />;
      case 'chat': return chatPartnerId ? <ChatDetailScreen user={user} partnerId={chatPartnerId} setScreen={handleScreenChange} /> : <MessagesScreen user={user} setScreen={handleScreenChange} setChatPartner={setChatPartnerId} />;
      case 'contact': return <ContactScreen setScreen={handleScreenChange} />;
      default: return <HomeScreen setScreen={handleScreenChange} />;
    }
  };

  const showNav = !['splash', 'login', 'admin', 'settings', 'chat', 'contact'].includes(screen);

  return (
    <div className="min-h-screen bg-brand-cream overflow-hidden">
      {showNav && <TopBar title="Sevara Studio" onNotify={() => handleScreenChange('notifications')} onContact={() => handleScreenChange('contact')} />}
      
      <main className="relative h-screen overflow-y-auto no-scrollbar">
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="flex-grow h-full"
          >
            {renderScreen()}
          </motion.div>
        </AnimatePresence>
      </main>

      {showNav && <BottomNav current={screen} setScreen={handleScreenChange} />}
    </div>
  );
}
