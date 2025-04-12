'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2E4053] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Matrimonial Biodata Creator</h3>
            <p className="text-sm opacity-75">Design Your Biodata in 5 Minutes – Simple & Elegant</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/#features" className="hover:text-[#FF4C4C]">
              Features
            </Link>
            <Link href="/#templates" className="hover:text-[#FF4C4C]">
              Templates
            </Link>
            <Link href="/#help" className="hover:text-[#FF4C4C]">
              Help
            </Link>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-6 text-center">
          <p className="text-sm opacity-75">© 2025 Matrimonial Biodata Creator. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
