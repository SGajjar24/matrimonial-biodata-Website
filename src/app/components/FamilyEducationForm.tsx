'use client';

import React from 'react';
import { useBiodataContext } from '../context/BiodataContext';
import InputField from './InputField';
import Button from './Button';

export default function FamilyEducationForm() {
  const { formData, updateFormData, addSibling, removeSibling } = useBiodataContext();
  const [newSibling, setNewSibling] = React.useState('');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData(name as keyof typeof formData, value);
  };
  
  const handleAddSibling = () => {
    if (newSibling.trim()) {
      addSibling(newSibling);
      setNewSibling('');
    }
  };
  
  const degreeOptions = [
    { value: 'engineer', label: 'Engineer' },
    { value: 'doctor', label: 'Doctor' },
    { value: 'teacher', label: 'Teacher' },
    { value: 'business', label: 'Business' },
    { value: 'government', label: 'Government Service' },
    { value: 'other', label: 'Other' },
  ];
  
  return (
    <div>
      <h2 className="section-title">Family & Education</h2>
      <p className="text-gray-600 mb-6">Tell us about your family background and education</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Family Details</h3>
          
          <div className="space-y-4">
            <InputField
              label="Father's Occupation"
              name="fatherOccupation"
              value={formData.fatherOccupation}
              onChange={handleChange}
              placeholder="e.g., Business, Government Service"
            />
            
            <InputField
              label="Mother's Occupation"
              name="motherOccupation"
              value={formData.motherOccupation}
              onChange={handleChange}
              placeholder="e.g., Homemaker, Teacher"
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Siblings
              </label>
              <div className="space-y-2">
                {formData.siblings.map((sibling, index) => (
                  <div key={index} className="flex items-center">
                    <input 
                      type="text" 
                      className="input-field" 
                      value={sibling} 
                      readOnly 
                    />
                    <button 
                      className="ml-2 text-red-500"
                      onClick={() => removeSibling(index)}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                ))}
                <div className="flex items-center">
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="e.g., Elder Brother - Software Engineer" 
                    value={newSibling}
                    onChange={(e) => setNewSibling(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddSibling()}
                  />
                  <button 
                    className="ml-2 text-[#FF4C4C]"
                    onClick={handleAddSibling}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Education & Career</h3>
          
          <div className="space-y-4">
            <InputField
              label="Highest Degree/Profession"
              type="select"
              name="degree"
              value={formData.degree}
              onChange={handleChange}
              options={degreeOptions}
            />
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Salary Range (₹)
              </label>
              <div className="mt-1">
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleChange}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>₹0</span>
                  <span>₹25L</span>
                  <span>₹50L+</span>
                </div>
                <div className="text-center text-sm mt-1">
                  Selected: ₹{formData.salaryRange}L
                </div>
              </div>
            </div>
            
            <InputField
              label="Company/Organization"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Where do you work?"
            />
            
            <InputField
              label="Job Description"
              type="textarea"
              name="jobDescription"
              value={formData.jobDescription}
              onChange={handleChange}
              placeholder="Briefly describe your role and responsibilities"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
