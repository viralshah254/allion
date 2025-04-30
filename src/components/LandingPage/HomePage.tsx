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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-oda-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Life insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zM6 20v-2a4 4 0 014-4h4a4 4 0 014 4v2" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Life Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Secure your loved ones’ future with tailor-made life policies and flexible premium plans.
                </p>
              </div>

              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-airforce-blue rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Non-life insurance icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8a2 2 0 012-2z" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Non-Life Insurance</h3>
                <p className="font-helvetica text-gray-600">
                  Protect your vehicles, homes, and businesses with comprehensive coverage and fast claims support.
                </p>
              </div>

              <div className="bg-seasalt p-6 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-500 ease-in-out">
                <div className="h-16 w-16 bg-auburn rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  {/* Digital service icon */}
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Digital & Advisory</h3>
                <p className="font-helvetica text-gray-600">
                  Enjoy 24/7 online policy management, expert advice, and interactive tools for total peace of mind.
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