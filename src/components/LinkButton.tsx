
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

interface LinkButtonProps {
  url: string;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
  index: number;
}

const LinkButton = ({ url, icon, label, primary = false, index }: LinkButtonProps) => {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`link-button ${primary ? 'primary-button' : ''} group`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex items-center">
        <span className="mr-3 transition-transform duration-300 group-hover:scale-110">
          {icon}
        </span>
        <span className="font-medium">{label}</span>
      </div>
      {primary ? (
        <ArrowRight size={18} className="text-orange-400 transition-transform duration-300 group-hover:translate-x-1" />
      ) : (
        <ExternalLink size={18} className="transition-transform duration-300 group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
      )}
    </a>
  );
};

export default LinkButton;
