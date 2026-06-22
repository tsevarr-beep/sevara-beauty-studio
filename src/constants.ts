
import kas from "./assets/kas.webp";
import lifting from "./assets/lifting.webp";
import pmu from "./assets/pmu.webp";
import tirnak from "./assets/tirnak.webp";
import lazz from "./assets/lazz.jpg"
import trnak from "./assets/trnak.jpg.jfif"
import ciltbakimi from "./assets/cilt bakimi.webp"

export const LOGO_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuA4npI2dLUljYwQdzperfcQAkQ0LWcjDRdQbtDB7aIcwbrvtgpfhzcXIG2mTeT3oRVZ9zEb6YT5b1e1vETrzl1H4E9AJttQ8a8GEb9i08_rO2x1pQEsLXndvq60gGIDhTzvuaWd4p4yLP4-KX_3YmvSL3ynqlkzgHxkZymxr6ymREFbg25CUl51RWzW4DQQ2pTPKxbLaWpQ1z8MYDoMzf4hYq-yOKZgfEfnAv4b30TebntiL67rcgDEW-18XthL8OBmJIPMUE4yDZ_7";

export const SERVICES = [
  {
    id: '1',
    name: "İpek Kirpik (Classic)",
    category: "Göz & Kaş",
    price: 1500,
    duration: 120,
    desc: "Bakışlarınıza derinlik katan, her bir kirpiğe titizlikle uygulanan ipek lifleri ile doğal ve hacimli bir görünüm.",
    img: lifting,
  },
  {
    id: '2',
    name: "Kaş Laminasyonu",
    category: "Göz & Kaş",
    price: 1500,
    duration: 60,
    desc: "Daha dolgun, şekillendirilmiş ve yukarı doğru taranmış kusursuz kaş formu için kalıcı laminasyon sistemi.",
    img: kas,
  },
  {
    id: '3',
    name: "Kirpik Lifting",
    category: "Göz & Kaş",
    price: 1500,
    duration: 60,
    desc: "Kendi kirpiklerinize doğal bir kavis ve belirginlik kazandıran, besleyici keratin bakımı içeren lifting uygulaması.",
    img: lifting,
  },
  {
    id: '4',
    name: "Signature Cilt Bakımı",
    category: "Cilt Bakımı",
    price: 2500,
    duration: 90,
    desc: "Kişiye özel analiz sonrası uygulanan, cildi derinlemesine arındıran ve tazeleyen 7 aşamalı premium bakım ritüeli.",
    img: ciltbakimi,
  },
  {
    id: '5',
    name: "French Manikür & Nail Art",
    category: "El & Ayak",
    price: 1800,
    duration: 60,
    desc: "Modern nude tonlar ve minimalist sanatsal çizgilerle birleşen, kusursuz törpülenmiş estetik el bakımı.",
    img: tirnak,
  },
  {
    id: '6',
    name: "Lüks Manikür SPA",
    category: "El & Ayak",
    price: 1800,
    duration: 45,
    desc: "Gül yaprakları ve esansiyel yağlar eşliğinde, peeling ve masajla taçlandırılan dinlendirici manikür deneyimi.",
    img: trnak,
  },
  {
    id: '7',
    name: "Kalıcı Makyaj (PMU)",
    category: "Klinik",
    price: 4500,
    duration: 150,
    desc: "Microblading veya eyeliner uygulamalarıyla, her an bakımlı ve doğal bir makyaj etkisi sunan uzman dokunuşlar.",
    img: pmu,
  },
  {
    id: '8',
    name: "Lazer Epilasyon",
    category: "Klinik",
    price: 3500,
    duration: 90,
    desc: "En son teknoloji buz başlıklı cihaz ile konforlu, hızlı ve kalıcı pürüzsüzlük sağlayan epilasyon seansı.",
    img: lazz,
  }
];

export const EXPERTS = [
  {
    id: 'e1',
    name: "Aylin Yeşilyurt",
    role: "Kıdemli Estetisyen",
    img: "",
    specialty: "Cilt Bakımı"
  },
  {
    id: 'e2',
    name: "Ceren Turan",
    role: "Lash & Brows Expert",
    img: "",
    specialty: "Göz & Kaş"
  },
  {
    id: 'e3',
    name: "Deniz Kaya",
    role: "Nail Artist",
    img: "",
  }
];

export const CAMPAIGNS = [
  {
    title: "Göz Alıcı Bakışlar",
    desc: "Kirpik ve kaş tasarımı paketlerinde %20 bahar avantajı.",
    img: lifting,
    color: "bg-brand-gold"
  },
  {
    title: "Yeni Nesil Bakım",
    desc: "Signature cilt bakımı seanslarında ilk ziyarete özel hediyeler.",
    img: pmu,
    color: "bg-brand-gold"
  }
];
