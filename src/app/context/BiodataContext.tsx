'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of our form data
interface BiodataFormData {
  // Personal Details
  fullName: string;
  age: string;
  gender: string;
  religion: string;
  height: string;
  weight: string;
  manglikStatus: string;
  diet: string;
  photo: string;
  
  // Family & Education
  fatherOccupation: string;
  motherOccupation: string;
  siblings: string[];
  degree: string;
  salaryRange: string;
  company: string;
  jobDescription: string;
  
  // Lifestyle & Preferences
  hobbies: string[];
  otherHobbies: string;
  partnerAgeMin: string;
  partnerAgeMax: string;
  partnerHeightMin: string;
  partnerHeightMax: string;
  partnerEducation: string;
  settledAbroad: boolean;
  horoscopeMatching: boolean;
  otherExpectations: string;
  
  // Template Customization
  selectedTemplate: 'traditional' | 'modern' | 'regional';
  fontSize: string;
  hideAge: boolean;
  hideSalary: boolean;
  hideContact: boolean;
}

// Default values for the form
const defaultFormData: BiodataFormData = {
  // Personal Details
  fullName: '',
  age: '',
  gender: '',
  religion: '',
  height: '',
  weight: '',
  manglikStatus: '',
  diet: '',
  photo: '',
  
  // Family & Education
  fatherOccupation: '',
  motherOccupation: '',
  siblings: [],
  degree: '',
  salaryRange: '0',
  company: '',
  jobDescription: '',
  
  // Lifestyle & Preferences
  hobbies: [],
  otherHobbies: '',
  partnerAgeMin: '',
  partnerAgeMax: '',
  partnerHeightMin: '',
  partnerHeightMax: '',
  partnerEducation: '',
  settledAbroad: false,
  horoscopeMatching: false,
  otherExpectations: '',
  
  // Template Customization
  selectedTemplate: 'traditional',
  fontSize: '16',
  hideAge: false,
  hideSalary: false,
  hideContact: false,
};

// Create the context
interface BiodataContextType {
  formData: BiodataFormData;
  updateFormData: (field: keyof BiodataFormData, value: any) => void;
  addSibling: (sibling: string) => void;
  removeSibling: (index: number) => void;
  toggleHobby: (hobby: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  goToNextStep: () => void;
  goToPrevStep: () => void;
  isFormValid: (step: number) => boolean;
}

const BiodataContext = createContext<BiodataContextType | undefined>(undefined);

// Provider component
interface BiodataProviderProps {
  children: ReactNode;
}

export function BiodataProvider({ children }: BiodataProviderProps) {
  const [formData, setFormData] = useState<BiodataFormData>(defaultFormData);
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  
  // Update form data
  const updateFormData = (field: keyof BiodataFormData, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Auto-save to localStorage
    const updatedData = {
      ...formData,
      [field]: value
    };
    localStorage.setItem('biodataForm', JSON.stringify(updatedData));
  };
  
  // Add sibling
  const addSibling = (sibling: string) => {
    if (sibling.trim()) {
      const updatedSiblings = [...formData.siblings, sibling];
      updateFormData('siblings', updatedSiblings);
    }
  };
  
  // Remove sibling
  const removeSibling = (index: number) => {
    const updatedSiblings = formData.siblings.filter((_, i) => i !== index);
    updateFormData('siblings', updatedSiblings);
  };
  
  // Toggle hobby
  const toggleHobby = (hobby: string) => {
    const hobbies = [...formData.hobbies];
    const index = hobbies.indexOf(hobby);
    
    if (index === -1) {
      hobbies.push(hobby);
    } else {
      hobbies.splice(index, 1);
    }
    
    updateFormData('hobbies', hobbies);
  };
  
  // Navigation
  const goToNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const goToPrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Form validation
  const isFormValid = (step: number): boolean => {
    switch (step) {
      case 1: // Personal Details
        return !!formData.fullName && !!formData.age && !!formData.gender;
      case 2: // Family & Education
        return true; // All fields optional
      case 3: // Lifestyle & Preferences
        return true; // All fields optional
      case 4: // Template Customization
        return !!formData.selectedTemplate;
      default:
        return false;
    }
  };
  
  // Load saved form data from localStorage on initial render
  React.useEffect(() => {
    const savedData = localStorage.getItem('biodataForm');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        setFormData(parsedData);
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, []);
  
  const value = {
    formData,
    updateFormData,
    addSibling,
    removeSibling,
    toggleHobby,
    currentStep,
    setCurrentStep,
    goToNextStep,
    goToPrevStep,
    isFormValid,
  };
  
  return (
    <BiodataContext.Provider value={value}>
      {children}
    </BiodataContext.Provider>
  );
}

// Custom hook to use the context
export function useBiodataContext() {
  const context = useContext(BiodataContext);
  if (context === undefined) {
    throw new Error('useBiodataContext must be used within a BiodataProvider');
  }
  return context;
}
