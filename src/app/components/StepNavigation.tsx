'use client';

import React from 'react';
import { useBiodataContext } from '../context/BiodataContext';
import Button from './Button';

export default function StepNavigation() {
  const { currentStep, goToNextStep, goToPrevStep, isFormValid } = useBiodataContext();
  const totalSteps = 4;
  
  return (
    <div className="step-nav">
      <Button 
        variant="outline"
        onClick={goToPrevStep}
        disabled={currentStep === 1}
      >
        Previous
      </Button>
      <Button 
        variant="primary"
        onClick={goToNextStep}
        disabled={currentStep === totalSteps || !isFormValid(currentStep)}
      >
        {currentStep === totalSteps ? 'Finish' : 'Next'}
      </Button>
    </div>
  );
}
