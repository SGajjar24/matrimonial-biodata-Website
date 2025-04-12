'use client';

import React from 'react';
import { useBiodataContext } from '../context/BiodataContext';
import TemplateCard from './TemplateCard';
import Link from 'next/link';

export default function TemplateCustomizationForm() {
  const { formData, updateFormData } = useBiodataContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData(name as keyof typeof formData, value);
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData(name as keyof typeof formData, checked);
  };
  
  const selectTemplate = (template: 'traditional' | 'modern' | 'regional') => {
    updateFormData('selectedTemplate', template);
  };
  
  return (
    <div>
      <h2 className="section-title">Template Customization</h2>
      <p className="text-gray-600 mb-6">Choose and customize your biodata template</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Select Template</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <TemplateCard
              title="Traditional"
              description="Red/Gold colors with emphasis on family section"
              theme="traditional"
              isActive={formData.selectedTemplate === 'traditional'}
              onClick={() => selectTemplate('traditional')}
            />
            
            <TemplateCard
              title="Modern"
              description="Navy Blue/White colors with minimalist layout"
              theme="modern"
              isActive={formData.selectedTemplate === 'modern'}
              onClick={() => selectTemplate('modern')}
            />
            
            <TemplateCard
              title="Regional"
              description="Support for Hindi, Tamil, Bengali, and more"
              theme="regional"
              isActive={formData.selectedTemplate === 'regional'}
              onClick={() => selectTemplate('regional')}
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Customize Template</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Font Size
              </label>
              <div className="flex items-center space-x-2">
                <span className="text-sm">12pt</span>
                <input
                  type="range"
                  min="12"
                  max="18"
                  step="1"
                  name="fontSize"
                  value={formData.fontSize}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className="text-sm">18pt</span>
              </div>
              <div className="text-center text-sm mt-1">
                Selected: {formData.fontSize}pt
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Privacy Settings
              </label>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input 
                    id="hide-age" 
                    type="checkbox" 
                    className="h-4 w-4 text-[#FF4C4C] focus:ring-[#FF4C4C] border-gray-300 rounded"
                    name="hideAge"
                    checked={formData.hideAge}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="hide-age" className="ml-2 block text-sm text-gray-700">
                    Hide age
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="hide-salary" 
                    type="checkbox" 
                    className="h-4 w-4 text-[#FF4C4C] focus:ring-[#FF4C4C] border-gray-300 rounded"
                    name="hideSalary"
                    checked={formData.hideSalary}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="hide-salary" className="ml-2 block text-sm text-gray-700">
                    Hide salary
                  </label>
                </div>
                <div className="flex items-center">
                  <input 
                    id="hide-contact" 
                    type="checkbox" 
                    className="h-4 w-4 text-[#FF4C4C] focus:ring-[#FF4C4C] border-gray-300 rounded"
                    name="hideContact"
                    checked={formData.hideContact}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="hide-contact" className="ml-2 block text-sm text-gray-700">
                    Hide contact information
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Preview</h3>
          
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
            <div className={`bg-${formData.selectedTemplate === 'traditional' ? 'red' : formData.selectedTemplate === 'modern' ? '[#2E4053]' : 'green'}-500 text-white text-center py-4 rounded-t-lg`}>
              <h3 className="text-xl font-bold">Biodata Preview</h3>
            </div>
            <div className="p-4">
              {formData.fullName ? (
                <div className="text-center">
                  <h4 className="text-xl font-bold">{formData.fullName}</h4>
                  <p>{formData.degree && degreeToLabel(formData.degree)}</p>
                  {!formData.hideAge && formData.age && (
                    <p className="text-gray-600 mt-2">Age: {formData.age} years</p>
                  )}
                </div>
              ) : (
                <p className="text-center text-gray-500 italic">
                  Your biodata preview will appear here after filling in your details
                </p>
              )}
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <Link href="/preview" className="text-[#FF4C4C] hover:underline">
              View full preview
            </Link>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Export Options</h3>
          
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </button>
            <button className="btn-outline flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
              </svg>
              Share Link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to convert degree value to label
function degreeToLabel(degree: string): string {
  const degreeMap: Record<string, string> = {
    'engineer': 'Engineer',
    'doctor': 'Doctor',
    'teacher': 'Teacher',
    'business': 'Business',
    'government': 'Government Service',
    'other': 'Professional',
  };
  
  return degreeMap[degree] || 'Professional';
}
