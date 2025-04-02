
import React from 'react';
import Logo from '../components/Logo';
import LinkButton from '../components/LinkButton';
import Footer from '../components/Footer';
import {
  ExternalLink,
  Smartphone,
  Youtube,
  Send,
  TiktokIcon,
} from 'lucide-react';

const Index = () => {
  const links = [
    {
      url: "https://www.bucksradar.com",
      icon: <ExternalLink size={20} />,
      label: "Official Website",
      primary: false,
    },
    {
      url: "https://chat.whatsapp.com/Lkxxnn1CBn4IGkBgrpT1I0",
      icon: <Smartphone size={20} />,
      label: "WhatsApp Community",
      primary: false,
    },
    {
      url: "https://www.tiktok.com/@bucksradar.com",
      icon: <TiktokIcon size={20} />,
      label: "TikTok",
      primary: false,
    },
    {
      url: "https://t.me/theforexmufasa",
      icon: <Send size={20} />,
      label: "Telegram Channel",
      primary: false,
    },
    {
      url: "https://youtube.com/@theforexmufasa",
      icon: <Youtube size={20} />,
      label: "YouTube Channel",
      primary: false,
    },
    {
      url: "https://chat.whatsapp.com/Lkxxnn1CBn4IGkBgrpT1I0",
      icon: <Smartphone size={20} className="text-bucksradar-gold" />,
      label: "Free Binary Trading Mentorship",
      primary: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="container max-w-md px-6 py-12">
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
