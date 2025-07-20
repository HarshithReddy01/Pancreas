import React from 'react';
import pancreasIcon from '../assets/pancreas-icon.png';

interface PanInsightLogoProps {
  className?: string;
  size?: number;
}

const PanInsightLogo: React.FC<PanInsightLogoProps> = ({ 
  className = "", 
  size = 80 
}) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      
      <img
        src={pancreasIcon}
        alt="PanInsight - AI-Powered Pancreatic Cancer Detection"
        width={size}
        height={size}
        className="object-contain drop-shadow-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
        }}
      />
      
      
    </div>
  );
};
export default PanInsightLogo; 