import React from 'react';

interface PanInsightIconProps {
  className?: string;
  size?: number;
}

const PanInsightIcon: React.FC<PanInsightIconProps> = ({ 
  className = "", 
  size = 64 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      
      <path
        d="M12 40C12 32 18 28 24 28C30 28 36 32 36 40C36 48 30 52 24 52C18 52 12 48 12 40Z"
        fill="black"
      />
      <path
        d="M36 40C36 32 42 28 48 28C54 28 60 32 60 40C60 48 54 52 48 52C42 52 36 48 36 40Z"
        fill="black"
      />
      
      
      <path
        d="M28 16C28 12 32 8 36 8C40 8 44 12 44 16C44 20 40 24 36 24C32 24 28 20 28 16Z"
        fill="#20B2AA"
      />
      
      
      <path
        d="M32 12L34 16M36 10L38 14"
        stroke="white"
        strokeWidth="1"
        strokeLinecap="round"
      />
      
      
      <circle cx="34" cy="18" r="1" fill="white" />
      <circle cx="32" cy="20" r="1" fill="white" />
      <circle cx="36" cy="20" r="1" fill="white" />
    </svg>
  );
};

export default PanInsightIcon; 