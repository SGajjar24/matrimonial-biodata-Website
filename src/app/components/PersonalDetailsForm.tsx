'use client';

import React from 'react';
import { useBiodataContext } from '../context/BiodataContext';
import InputField from './InputField';
import Button from './Button';

export default function PersonalDetailsForm() {
  const { formData, updateFormData, isFormValid } = useBiodataContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData(name as keyof typeof formData, value);
  };
  
  const religionOptions = [
    { value: 'hindu', label: 'Hindu' },
    { value: 'muslim', label: 'Muslim' },
    { value: 'christian', label: 'Christian' },
    { value: 'sikh', label: 'Sikh' },
    { value: 'jain', label: 'Jain' },
    { value: 'buddhist', label: 'Buddhist' },
    { value: 'other', label: 'Other' },
  ];
  
  const genderOptions = [
    { value: 'male', label: 'Male' },
    { value: 'female', label: 'Female' },
    { value: 'other', label: 'Other' },
  ];
  
  const manglikOptions = [
    { value: 'yes', label: 'Yes' },
    { value: 'no', label: 'No' },
    { value: 'dont-know', label: 'Don\'t Know' },
  ];
  
  const dietOptions = [
    { value: 'veg', label: 'Vegetarian' },
    { value: 'non-veg', label: 'Non-Vegetarian' },
    { value: 'jain', label: 'Jain' },
  ];
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        updateFormData('photo', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };
  
  return (
    <div>
      <h2 className="section-title">Personal Details</h2>
      <p className="text-gray-600 mb-6">Fill in your basic personal information</p>
      
      <div className="space-y-4">
        <InputField
          label="Full Name"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Age"
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter your age"
            required
          />
          
          <InputField
            label="Gender"
            type="select"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            options={genderOptions}
            required
          />
        </div>
        
        <div>
          <InputField
            label="Religion/Caste"
            type="select"
            name="religion"
            value={formData.religion}
            onChange={handleChange}
            options={religionOptions}
            tooltip="Optional field, can be skipped"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            placeholder="e.g., 5'8\""
          />
          
          <InputField
            label="Weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            placeholder="e.g., 65 kg"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField
            label="Manglik Status"
            type="select"
            name="manglikStatus"
            value={formData.manglikStatus}
            onChange={handleChange}
            options={manglikOptions}
            tooltip="Astrological consideration in some communities"
          />
          
          <InputField
            label="Diet"
            type="select"
            name="diet"
            value={formData.diet}
            onChange={handleChange}
            options={dietOptions}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Profile Photo
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {formData.photo ? (
                <div className="mb-3">
                  <img 
                    src={formData.photo} 
                    alt="Profile Preview" 
                    className="h-32 w-auto mx-auto rounded-md"
                  />
                </div>
              ) : (
                <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <div className="flex text-sm text-gray-600">
                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-[#FF4C4C] hover:text-[#E43C3C]">
                  <span>Upload a file</span>
                  <input 
                    id="file-upload" 
                    name="file-upload" 
                    type="file" 
                    className="sr-only" 
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
