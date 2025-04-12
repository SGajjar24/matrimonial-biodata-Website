'use client';

import React from 'react';
import { BiodataProvider } from '../context/BiodataContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PersonalDetailsForm from '../components/PersonalDetailsForm';
import FamilyEducationForm from '../components/FamilyEducationForm';
import LifestylePreferencesForm from '../components/LifestylePreferencesForm';
import TemplateCustomizationForm from '../components/TemplateCustomizationForm';
import StepNavigation from '../components/StepNavigation';
import ProgressBar from '../components/ProgressBar';
import { useBiodataContext } from '../context/BiodataContext';

function CreateBiodataContent() {
  const { currentStep, setCurrentStep } = useBiodataContext();
  const totalSteps = 4;

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <Header />

        {/* Progress Bar */}
        <ProgressBar currentStep={currentStep} totalSteps={totalSteps} />

        {/* Step Container */}
        <div className="step-container">
          {/* Sidebar */}
          <div className="step-sidebar">
            <h3 className="font-bold text-lg mb-4">Steps</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${currentStep === 1 ? 'bg-[#FF4C4C] text-white' : 'hover:bg-gray-200'}`}
                  onClick={() => setCurrentStep(1)}
                >
                  1. Personal Details
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${currentStep === 2 ? 'bg-[#FF4C4C] text-white' : 'hover:bg-gray-200'}`}
                  onClick={() => setCurrentStep(2)}
                >
                  2. Family & Education
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${currentStep === 3 ? 'bg-[#FF4C4C] text-white' : 'hover:bg-gray-200'}`}
                  onClick={() => setCurrentStep(3)}
                >
                  3. Lifestyle & Preferences
                </button>
              </li>
              <li>
                <button 
                  className={`w-full text-left px-3 py-2 rounded-md ${currentStep === 4 ? 'bg-[#FF4C4C] text-white' : 'hover:bg-gray-200'}`}
                  onClick={() => setCurrentStep(4)}
                >
                  4. Template Selection
                </button>
              </li>
            </ul>
          </div>

          {/* Content */}
          <div className="step-content">
            {currentStep === 1 && <PersonalDetailsForm />}
            {currentStep === 2 && <FamilyEducationForm />}
            {currentStep === 3 && <LifestylePreferencesForm />}
            {currentStep === 4 && <TemplateCustomizationForm />}

            {/* Navigation Buttons */}
            <StepNavigation />
          </div>
        </div>
      </div>
    </main>
  );
}

export default function CreateBiodata() {
  return (
    <BiodataProvider>
      <CreateBiodataContent />
    </BiodataProvider>
  );
}
