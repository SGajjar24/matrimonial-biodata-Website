'use client';

import React from 'react';

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  tooltip?: string;
  className?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  options?: { value: string; label: string }[];
  rows?: number;
}

export default function InputField({
  label,
  type = 'text',
  placeholder = '',
  required = false,
  tooltip = '',
  className = '',
  value,
  onChange,
  options = [],
  rows = 3,
}: InputFieldProps) {
  return (
    <div className={`mb-4 ${className}`}>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
        {tooltip && (
          <span className="tooltip ml-1">
            <svg className="w-4 h-4 inline-block text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
            <span className="tooltip-text">{tooltip}</span>
          </span>
        )}
      </label>
      
      {type === 'select' ? (
        <select 
          className="input-field"
          value={value}
          onChange={onChange}
        >
          <option value="">{placeholder || `Select ${label.toLowerCase()}`}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          className="input-field"
          placeholder={placeholder}
          rows={rows}
          value={value}
          onChange={onChange}
        ></textarea>
      ) : (
        <input
          type={type}
          className="input-field"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
