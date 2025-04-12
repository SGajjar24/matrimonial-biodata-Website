'use client';

import React from 'react';
import { useBiodataContext } from '../context/BiodataContext';
import InputField from './InputField';

export default function LifestylePreferencesForm() {
  const { formData, updateFormData, toggleHobby } = useBiodataContext();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    updateFormData(name as keyof typeof formData, value);
  };
  
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    updateFormData(name as keyof typeof formData, checked);
  };
  
  const hobbies = [
    { emoji: '🏃', name: 'fitness' },
    { emoji: '📚', name: 'reading' },
    { emoji: '🎵', name: 'music' },
    { emoji: '🎨', name: 'art' },
    { emoji: '✈️', name: 'travel' },
    { emoji: '🍳', name: 'cooking' },
    { emoji: '🎮', name: 'gaming' },
    { emoji: '🎬', name: 'movies' },
    { emoji: '📷', name: 'photography' },
    { emoji: '🏊', name: 'swimming' },
    { emoji: '🧘', name: 'yoga' },
    { emoji: '🚴', name: 'cycling' },
  ];
  
  const educationOptions = [
    { value: 'high-school', label: 'High School' },
    { value: 'bachelors', label: 'Bachelor\'s Degree' },
    { value: 'masters', label: 'Master\'s Degree' },
    { value: 'doctorate', label: 'Doctorate' },
  ];
  
  return (
    <div>
      <h2 className="section-title">Lifestyle & Preferences</h2>
      <p className="text-gray-600 mb-6">Tell us about your lifestyle and partner preferences</p>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Hobbies & Interests</h3>
          <p className="text-sm text-gray-500 mb-4">Select all that apply</p>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 mb-4">
            {hobbies.map((hobby) => (
              <div 
                key={hobby.name}
                className={`hobby-icon ${formData.hobbies.includes(hobby.name) ? 'selected' : ''}`}
                onClick={() => toggleHobby(hobby.name)}
              >
                <span>{hobby.emoji}</span>
              </div>
            ))}
          </div>
          
          <InputField
            label="Other Hobbies"
            name="otherHobbies"
            value={formData.otherHobbies}
            onChange={handleChange}
            placeholder="Enter other hobbies separated by commas"
          />
        </div>
        
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-3">Partner Expectations</h3>
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Age Range
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="number" 
                    className="input-field w-20" 
                    placeholder="Min" 
                    name="partnerAgeMin"
                    value={formData.partnerAgeMin}
                    onChange={handleChange}
                  />
                  <span>to</span>
                  <input 
                    type="number" 
                    className="input-field w-20" 
                    placeholder="Max" 
                    name="partnerAgeMax"
                    value={formData.partnerAgeMax}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Height
                </label>
                <div className="flex items-center space-x-2">
                  <input 
                    type="text" 
                    className="input-field w-24" 
                    placeholder="Min" 
                    name="partnerHeightMin"
                    value={formData.partnerHeightMin}
                    onChange={handleChange}
                  />
                  <span>to</span>
                  <input 
                    type="text" 
                    className="input-field w-24" 
                    placeholder="Max" 
                    name="partnerHeightMax"
                    value={formData.partnerHeightMax}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <InputField
                label="Education"
                type="select"
                name="partnerEducation"
                value={formData.partnerEducation}
                onChange={handleChange}
                options={educationOptions}
                placeholder="Select minimum education"
              />
            </div>
            
            <div className="flex items-center">
              <input 
                id="settled-abroad" 
                type="checkbox" 
                className="h-4 w-4 text-[#FF4C4C] focus:ring-[#FF4C4C] border-gray-300 rounded"
                name="settledAbroad"
                checked={formData.settledAbroad}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="settled-abroad" className="ml-2 block text-sm text-gray-700">
                Prefer partner settled abroad
              </label>
            </div>
            
            <div className="flex items-center">
              <input 
                id="horoscope-matching" 
                type="checkbox" 
                className="h-4 w-4 text-[#FF4C4C] focus:ring-[#FF4C4C] border-gray-300 rounded"
                name="horoscopeMatching"
                checked={formData.horoscopeMatching}
                onChange={handleCheckboxChange}
              />
              <label htmlFor="horoscope-matching" className="ml-2 block text-sm text-gray-700">
                Horoscope matching is important
              </label>
            </div>
            
            <InputField
              label="Other Expectations"
              type="textarea"
              name="otherExpectations"
              value={formData.otherExpectations}
              onChange={handleChange}
              placeholder="Any other expectations from your partner"
              rows={3}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
