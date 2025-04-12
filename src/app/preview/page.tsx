'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function PreviewBiodata() {
  const [template, setTemplate] = useState('traditional');

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <header className="mb-8">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-[#FF4C4C]">
              Matrimonial Biodata Creator
            </Link>
            <div className="flex space-x-4">
              <Link href="/create" className="btn-outline">
                Edit Biodata
              </Link>
            </div>
          </div>
        </header>

        {/* Preview Container */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
          {/* Template Selector */}
          <div className="bg-gray-100 p-4 border-b">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-[#2E4053]">Biodata Preview</h2>
              <div className="flex space-x-2">
                <button 
                  className={`px-3 py-1 rounded-md ${template === 'traditional' ? 'bg-[#FF4C4C] text-white' : 'bg-gray-200'}`}
                  onClick={() => setTemplate('traditional')}
                >
                  Traditional
                </button>
                <button 
                  className={`px-3 py-1 rounded-md ${template === 'modern' ? 'bg-[#FF4C4C] text-white' : 'bg-gray-200'}`}
                  onClick={() => setTemplate('modern')}
                >
                  Modern
                </button>
                <button 
                  className={`px-3 py-1 rounded-md ${template === 'regional' ? 'bg-[#FF4C4C] text-white' : 'bg-gray-200'}`}
                  onClick={() => setTemplate('regional')}
                >
                  Regional
                </button>
              </div>
            </div>
          </div>

          {/* Traditional Template */}
          {template === 'traditional' && (
            <div className="p-6">
              <div className="border-2 border-red-500 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-red-500 text-white text-center py-4">
                  <h1 className="text-2xl font-bold">Rahul Sharma</h1>
                  <p>Software Engineer</p>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Left Panel */}
                  <div className="md:w-1/3 p-4 bg-red-50">
                    <div className="mb-4">
                      <div className="bg-gray-200 h-48 w-40 mx-auto rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <p><strong>Age:</strong> 28 years</p>
                      <p><strong>Height:</strong> 5'10"</p>
                      <p><strong>Religion:</strong> Hindu</p>
                      <p><strong>Diet:</strong> Vegetarian</p>
                      <p><strong>Location:</strong> Mumbai, Maharashtra</p>
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="md:w-2/3 p-4">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-red-700 border-b-2 border-red-200 pb-1 mb-2">Family Details</h2>
                      <p><strong>Father:</strong> Mr. Rajesh Sharma (Business)</p>
                      <p><strong>Mother:</strong> Mrs. Sunita Sharma (Homemaker)</p>
                      <p><strong>Siblings:</strong> 1 Brother (Married), 1 Sister (Studying)</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-red-700 border-b-2 border-red-200 pb-1 mb-2">Education & Career</h2>
                      <p><strong>Education:</strong> B.Tech in Computer Science</p>
                      <p><strong>Profession:</strong> Software Engineer at Google</p>
                      <p><strong>Income:</strong> ₹25-30 LPA</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-red-700 border-b-2 border-red-200 pb-1 mb-2">Hobbies & Interests</h2>
                      <p>Reading, Traveling, Music, Photography</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-red-700 border-b-2 border-red-200 pb-1 mb-2">Partner Preferences</h2>
                      <p><strong>Age:</strong> 24-28 years</p>
                      <p><strong>Education:</strong> Graduate</p>
                      <p><strong>Profession:</strong> Any</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-red-100 p-2 text-center">
                  <div className="inline-block bg-white p-2 rounded-md">
                    <div className="w-16 h-16 bg-gray-300 mx-auto"></div>
                    <p className="text-xs mt-1">Scan for digital profile</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Modern Template */}
          {template === 'modern' && (
            <div className="p-6">
              <div className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
                {/* Header */}
                <div className="bg-[#2E4053] text-white text-center py-4">
                  <h1 className="text-2xl font-bold">Rahul Sharma</h1>
                  <p className="text-sm">Software Engineer • Mumbai</p>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Left Panel */}
                  <div className="md:w-1/3 p-4 bg-gray-50">
                    <div className="mb-4">
                      <div className="bg-gray-200 h-48 w-40 mx-auto rounded-lg"></div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Age</span>
                        <span>28 years</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Height</span>
                        <span>5'10"</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Religion</span>
                        <span>Hindu</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Diet</span>
                        <span>Vegetarian</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="md:w-2/3 p-4">
                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#2E4053] border-b border-gray-200 pb-1 mb-2">Career</h2>
                      <p className="text-sm"><strong>Education:</strong> B.Tech in Computer Science</p>
                      <p className="text-sm"><strong>Company:</strong> Google</p>
                      <p className="text-sm"><strong>Income:</strong> ₹25-30 LPA</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#2E4053] border-b border-gray-200 pb-1 mb-2">Family</h2>
                      <p className="text-sm"><strong>Father:</strong> Mr. Rajesh Sharma (Business)</p>
                      <p className="text-sm"><strong>Mother:</strong> Mrs. Sunita Sharma (Homemaker)</p>
                      <p className="text-sm"><strong>Siblings:</strong> 1 Brother, 1 Sister</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-lg font-bold text-[#2E4053] border-b border-gray-200 pb-1 mb-2">Interests</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Reading</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Traveling</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Music</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Photography</span>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-lg font-bold text-[#2E4053] border-b border-gray-200 pb-1 mb-2">Partner Preferences</h2>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Age: 24-28 years</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Education: Graduate</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Profession: Any</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-gray-50 p-2 text-center border-t border-gray-200">
                  <div className="inline-block bg-white p-2 rounded-md shadow-sm">
                    <div className="w-16 h-16 bg-gray-300 mx-auto"></div>
                    <p className="text-xs mt-1">Scan QR Code</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Regional Template */}
          {template === 'regional' && (
            <div className="p-6">
              <div className="border-2 border-green-500 rounded-lg overflow-hidden">
                {/* Header */}
                <div className="bg-green-500 text-white text-center py-4">
                  <h1 className="text-2xl font-bold">राहुल शर्मा</h1>
                  <p>सॉफ्टवेयर इंजीनियर</p>
                </div>

                <div className="flex flex-col md:flex-row">
                  {/* Left Panel */}
                  <div className="md:w-1/3 p-4 bg-green-50">
                    <div className="mb-4">
                      <div className="bg-gray-200 h-48 w-40 mx-auto rounded-lg"></div>
                    </div>
                    <div className="space-y-2">
                      <p><strong>आयु:</strong> 28 वर्ष</p>
                      <p><strong>ऊंचाई:</strong> 5'10"</p>
                      <p><strong>धर्म:</strong> हिन्दू</p>
                      <p><strong>आहार:</strong> शाकाहारी</p>
                      <p><strong>स्थान:</strong> मुंबई, महाराष्ट्र</p>
                    </div>
                  </div>

                  {/* Right Panel */}
                  <div className="md:w-2/3 p-4">
                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-200 pb-1 mb-2">परिवार विवरण</h2>
                      <p><strong>पिता:</strong> श्री राजेश शर्मा (व्यापार)</p>
                      <p><strong>माता:</strong> श्रीमती सुनीता शर्मा (गृहिणी)</p>
                      <p><strong>भाई-बहन:</strong> 1 भाई (विवाहित), 1 बहन (अध्ययनरत)</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-200 pb-1 mb-2">शिक्षा और करियर</h2>
                      <p><strong>शिक्षा:</strong> कंप्यूटर साइंस में बी.टेक</p>
                      <p><strong>पेशा:</strong> गूगल में सॉफ्टवेयर इंजीनियर</p>
                      <p><strong>आय:</strong> ₹25-30 LPA</p>
                    </div>

                    <div className="mb-4">
                      <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-200 pb-1 mb-2">शौक और रुचियां</h2>
                      <p>पढ़ना, यात्रा, संगीत, फोटोग्राफी</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-green-700 border-b-2 border-green-200 pb-1 mb-2">साथी प्राथमिकताएं</h2>
                      <p><strong>आयु:</strong> 24-28 वर्ष</p>
                      <p><strong>शिक्षा:</strong> स्नातक</p>
                      <p><strong>पेशा:</strong> कोई भी</p>
                    </div>
                  </div>
                </div>

                {/* Footer */}
                <div className="bg-green-100 p-2 text-center">
                  <div className="inline-block bg-white p-2 rounded-md">
                    <div className="w-16 h-16 bg-gray-300 mx-auto"></div>
                    <p className="text-xs mt-1">डिजिटल प्रोफाइल के लिए स्कैन करें</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Export Options */}
          <div className="p-4 bg-gray-100 border-t">
            <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
              <button className="btn-outline flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                Share Link
              </button>
              <button className="btn-primary flex items-center justify-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Download PDF
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
