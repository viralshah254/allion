import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="container mx-auto px-4 py-12">
          {/* Additional home page content */}
          <div className="text-center my-12">
            <h2 className="font-helvetica font-bold text-3xl md:text-4xl text-oda-blue mb-6 animate-fadeIn">
              Allion Insurance Brokers Ltd — Kenya’s Premier Life & Non-Life Insurance Partner
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-helvetica text-gray-700 mb-6 leading-relaxed animate-fadeIn delay-200">
                From safeguarding your family’s future with comprehensive life insurance to protecting your assets with robust non-life coverage, Allion offers bespoke policies designed for every Kenyan need. Leverage our 20+ years of industry expertise, personalized advisory service, and cutting-edge digital tools for seamless policy management and rapid claims processing.
              </p>
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-airforce-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Motor Insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 13l2-2m0 0l7-7 7 7M13 6v8m-6 4h12v2H7v-2z" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Motor Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Comprehensive cover for your vehicles against accidents, theft, and third-party liability.
                </p>
              </div>

              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-auburn rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Fire Insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 22h20L12 2zm0 5v6m0 4h.01" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Fire Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Protection against loss or damage to property caused by fire, smoke, and allied perils.
                </p>
              </div>

              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-oda-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Marine Insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12h18M3 6h18M3 18h18" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Marine Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Coverage for cargo, hull, and liabilities during transit by sea, inland waterways, or air.
                </p>
              </div>

              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-airforce-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Domestic Insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v-4a4 4 0 014-4h8a4 4 0 014 4v4M12 20v-6m0 0l3 3m-3-3l-3 3" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Domestic Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Protect your home and household contents against theft, damage, and liability risks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;