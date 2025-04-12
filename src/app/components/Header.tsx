'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-[#FF4C4C]">
            Matrimonial Biodata Creator
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-4">
          <Link href="/#features" className="text-gray-600 hover:text-[#FF4C4C]">
            Features
          </Link>
          <Link href="/#templates" className="text-gray-600 hover:text-[#FF4C4C]">
            Templates
          </Link>
          <Link href="/#help" className="text-gray-600 hover:text-[#FF4C4C]">
            Help
          </Link>
          <Link href="/create" className="btn-primary">
            Start Now
          </Link>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-[#FF4C4C]"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-2">
          <div className="container mx-auto px-4 space-y-2">
            <Link 
              href="/#features" 
              className="block py-2 text-gray-600 hover:text-[#FF4C4C]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="/#templates" 
              className="block py-2 text-gray-600 hover:text-[#FF4C4C]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Templates
            </Link>
            <Link 
              href="/#help" 
              className="block py-2 text-gray-600 hover:text-[#FF4C4C]"
              onClick={() => setMobileMenuOpen(false)}
            >
              Help
            </Link>
            <Link 
              href="/create" 
              className="block py-2 text-[#FF4C4C] font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Start Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
