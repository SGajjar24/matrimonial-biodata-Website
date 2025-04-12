'use client';

import React from 'react';

interface TemplateCardProps {
  title: string;
  description: string;
  theme: 'traditional' | 'modern' | 'regional';
  isActive?: boolean;
  onClick?: () => void;
}

export default function TemplateCard({
  title,
  description,
  theme,
  isActive = false,
  onClick,
}: TemplateCardProps) {
  const themeStyles = {
    traditional: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-800',
      subtext: 'text-red-600',
    },
    modern: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-800',
      subtext: 'text-blue-600',
    },
    regional: {
      bg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-800',
      subtext: 'text-green-600',
    },
  };

  const styles = themeStyles[theme];
  
  return (
    <div 
      className={`template-card ${isActive ? 'active' : ''}`}
      onClick={onClick}
    >
      <div className={`template-preview ${styles.bg}`}>
        <div className={`w-full h-full flex items-center justify-center border-2 ${styles.border} rounded-lg m-2 p-2`}>
          <div className="text-center">
            <h4 className={`font-bold ${styles.text}`}>{title}</h4>
            <p className={`text-sm ${styles.subtext}`}>{description}</p>
          </div>
        </div>
      </div>
      <div className="template-info">
        <h3 className="font-bold mb-1">{title}</h3>
        <p className="text-sm text-gray-600">
          {description}
        </p>
      </div>
    </div>
  );
}
