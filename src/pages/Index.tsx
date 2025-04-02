
import React from 'react';
import Logo from '../components/Logo';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';
import {
  ExternalLink,
  Smartphone,
  Youtube,
  Send,
} from 'lucide-react';
import TikTokIcon from '../components/TikTokIcon';

const Index = () => {
  const links = [
    {
      url: "https://www.bucksradar.com",
      icon: <ExternalLink size={20} className="text-orange-400" />,
      label: "Official Website",
      primary: false,
    },
    {
      url: "https://chat.whatsapp.com/Lkxxnn1CBn4IGkBgrpT1I0",
      icon: <Smartphone size={20} className="text-orange-400" />,
      label: "WhatsApp Community",
      primary: false,
    },
    {
      url: "https://www.tiktok.com/@bucksradar.com",
      icon: <TikTokIcon size={20} className="text-orange-400" />,
      label: "TikTok",
      primary: false,
    },
    {
      url: "https://t.me/theforexmufasa",
      icon: <Send size={20} className="text-orange-400" />,
      label: "Telegram Channel",
      primary: false,
    },
    {
      url: "https://youtube.com/@theforexmufasa",
      icon: <Youtube size={20} className="text-orange-400" />,
      label: "YouTube Channel",
      primary: false,
    },
    {
      url: "https://chat.whatsapp.com/Lkxxnn1CBn4IGkBgrpT1I0",
      icon: <Smartphone size={20} className="text-orange-400" />,
      label: "Free Binary Trading Mentorship",
      primary: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#1E1E1E] relative overflow-hidden">
      {/* Background hexagon pattern */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiI+CjxyZWN0IHdpZHRoPSI4NiIgaGVpZ2h0PSI4NiIgZmlsbD0iIzJkMmQyZCI+PC9yZWN0Pgo8cGF0aCBmaWxsPSIjM2MzYzNjIiBkPSJNNDMsMzAgTDQzLDE1IEw1OCwwIEw3MywxNSBMNzMsNDUgTDU4LDYwIEw0Myw0NSBMNDMsMzAgTTQzLDMwIEw1OCwxNSBMNTgsNDUgTDQzLDMwIE0xNSw0NSBMMCw2MCBMMCw5MCBMMTUsMTA1IEw0NSw3NSBMNDVMNDVMMTU0NXogTTE1LDQ1IEwxNSw3NSBMMTUsNDUgTTczLDQ1IEw3MywxNSBMNzMsNDV6Ij48L3BhdGg+Cjwvc3ZnPg==')] pointer-events-none"></div>
      
      <div className="container max-w-md px-6 py-12 relative z-10">
        <Logo />
        
        <div className="space-y-3 mt-8 w-full max-w-sm mx-auto">
          {links.map((link, index) => (
            <LinkButton
              key={index}
              url={link.url}
              icon={link.icon}
              label={link.label}
              primary={link.primary}
              index={index + 2}
            />
          ))}
        </div>
        
        <Footer />
      </div>
    </div>
  );
};

export default Index;
