
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
      className={`link-button ${primary ? 'primary-button' : ''}`}
      style={{ '--index': index } as React.CSSProperties}
    >
      <div className="flex items-center">
        <span className="mr-3">{icon}</span>
        <span>{label}</span>
      </div>
      {primary ? (
        <ArrowRight size={18} className="text-bucksradar-gold" />
      ) : (
        <ExternalLink size={18} />
      )}
    </a>
  );
};

export default LinkButton;
