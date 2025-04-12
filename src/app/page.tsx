import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#FF4C4C]">Matrimonial Biodata Creator</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <Link href="#features" className="text-gray-600 hover:text-[#FF4C4C]">
              Features
            </Link>
            <Link href="#templates" className="text-gray-600 hover:text-[#FF4C4C]">
              Templates
            </Link>
            <Link href="#help" className="text-gray-600 hover:text-[#FF4C4C]">
              Help
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF4C4C] to-[#FF7676] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Design Your Biodata in 5 Minutes</h2>
              <p className="text-xl mb-6">Simple & Elegant – No registration required</p>
              <ul className="mb-8 space-y-2">
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Pre-built templates (Traditional/Modern/Regional)
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Mobile-first design
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Privacy controls
                </li>
              </ul>
              <Link href="/create" className="btn-primary inline-block text-lg">
                Start Now →
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <div className="bg-[#2E4053] text-white text-center py-4 rounded-t-lg">
                  <h3 className="text-xl font-bold">Sample Biodata</h3>
                </div>
                <div className="p-4">
                  <div className="flex">
                    <div className="w-1/3">
                      <div className="bg-gray-200 h-40 w-32 mx-auto rounded-lg"></div>
                    </div>
                    <div className="w-2/3 pl-4">
                      <h4 className="text-xl font-bold text-[#2E4053]">Rahul Sharma</h4>
                      <p className="text-gray-600">28 years, 5'10"</p>
                      <p className="text-gray-600">Software Engineer</p>
                      <p className="text-gray-600">Mumbai, Maharashtra</p>
                      <div className="mt-2 flex space-x-2">
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Hindu</span>
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">Vegetarian</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4053]">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card">
              <div className="rounded-full bg-[#FF4C4C] w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Step-by-Step Input</h3>
              <p className="text-gray-600 text-center">
                Easy-to-follow process with tooltips for guidance at every step
              </p>
            </div>
            <div className="card">
              <div className="rounded-full bg-[#FF4C4C] w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Customizable Templates</h3>
              <p className="text-gray-600 text-center">
                Choose from traditional, modern, or regional templates with customization options
              </p>
            </div>
            <div className="card">
              <div className="rounded-full bg-[#FF4C4C] w-16 h-16 flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-center mb-2">Easy Export</h3>
              <p className="text-gray-600 text-center">
                Download as PDF or share via link with privacy controls
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Templates Section */}
      <section id="templates" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4053]">Pre-Built Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="template-card">
              <div className="template-preview bg-red-50">
                <div className="w-full h-full flex items-center justify-center border-2 border-red-200 rounded-lg m-2 p-2">
                  <div className="text-center">
                    <h4 className="font-bold text-red-800">Traditional</h4>
                    <p className="text-sm text-red-600">Red/Gold theme</p>
                  </div>
                </div>
              </div>
              <div className="template-info">
                <h3 className="font-bold mb-1">Traditional</h3>
                <p className="text-sm text-gray-600">
                  Red/Gold colors with emphasis on family section
                </p>
              </div>
            </div>
            <div className="template-card">
              <div className="template-preview bg-blue-50">
                <div className="w-full h-full flex items-center justify-center border-2 border-blue-200 rounded-lg m-2 p-2">
                  <div className="text-center">
                    <h4 className="font-bold text-blue-800">Modern</h4>
                    <p className="text-sm text-blue-600">Navy Blue/White theme</p>
                  </div>
                </div>
              </div>
              <div className="template-info">
                <h3 className="font-bold mb-1">Modern</h3>
                <p className="text-sm text-gray-600">
                  Navy Blue/White colors with minimalist layout
                </p>
              </div>
            </div>
            <div className="template-card">
              <div className="template-preview bg-green-50">
                <div className="w-full h-full flex items-center justify-center border-2 border-green-200 rounded-lg m-2 p-2">
                  <div className="text-center">
                    <h4 className="font-bold text-green-800">Regional</h4>
                    <p className="text-sm text-green-600">Multiple language support</p>
                  </div>
                </div>
              </div>
              <div className="template-info">
                <h3 className="font-bold mb-1">Regional</h3>
                <p className="text-sm text-gray-600">
                  Support for Hindi, Tamil, Bengali, and more
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Flow Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4053]">How It Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="rounded-full bg-[#FF4C4C] w-12 h-12 flex items-center justify-center text-white font-bold mb-2">
                1
              </div>
              <h3 className="font-bold mb-1">Input Details</h3>
              <p className="text-sm text-gray-600 text-center">
                Fill in your personal information
              </p>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="rounded-full bg-[#FF4C4C] w-12 h-12 flex items-center justify-center text-white font-bold mb-2">
                2
              </div>
              <h3 className="font-bold mb-1">Choose Template</h3>
              <p className="text-sm text-gray-600 text-center">
                Select from pre-built designs
              </p>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="rounded-full bg-[#FF4C4C] w-12 h-12 flex items-center justify-center text-white font-bold mb-2">
                3
              </div>
              <h3 className="font-bold mb-1">Customize</h3>
              <p className="text-sm text-gray-600 text-center">
                Personalize your biodata
              </p>
            </div>
            <div className="hidden md:block">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-[#FF4C4C] w-12 h-12 flex items-center justify-center text-white font-bold mb-2">
                4
              </div>
              <h3 className="font-bold mb-1">Download</h3>
              <p className="text-sm text-gray-600 text-center">
                Get PDF or share link
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section id="help" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-[#2E4053]">Help & Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Example Biodata</h3>
              <div className="example-biodata">
                <div className="bg-[#2E4053] text-white text-center py-2 rounded-t-lg">
                  <h4 className="font-bold">Priya Patel</h4>
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Age:</strong> 26 years | <strong>Height:</strong> 5'4" | <strong>Education:</strong> MBA
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Profession:</strong> Marketing Manager | <strong>Location:</strong> Delhi
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Family:</strong> Father (Business), Mother (Teacher), 1 Brother
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Hobbies:</strong> Reading, Cooking, Traveling
                  </p>
                </div>
              </div>
            </div>
            <div className="card">
              <h3 className="text-xl font-bold mb-4">Video Tutorial</h3>
              <div className="video-tutorial flex items-center justify-center">
                <svg className="w-16 h-16 text-[#FF4C4C]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-center mt-4 text-gray-600">
                Watch our 2-minute tutorial to learn how to create your perfect biodata
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2E4053] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Matrimonial Biodata Creator</h3>
              <p className="text-sm opacity-75">Design Your Biodata in 5 Minutes – Simple & Elegant</p>
            </div>
            <div className="flex space-x-4">
              <Link href="#features" className="hover:text-[#FF4C4C]">
                Features
              </Link>
              <Link href="#templates" className="hover:text-[#FF4C4C]">
                Templates
              </Link>
              <Link href="#help" className="hover:text-[#FF4C4C]">
                Help
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-sm opacity-75">© 2025 Matrimonial Biodata Creator. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
