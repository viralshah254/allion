import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="bg-seasalt">
      <div className="container mx-auto px-6 md:px-12 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          {/* Text content */}
          <div className="md:w-1/2 text-oda-blue mb-12 md:mb-0 md:pr-12">
            <h1 className="font-helvetica font-bold text-4xl md:text-5xl mb-6">
              Allion Insurance Brokers Ltd — Your Trusted Insurance Partner
            </h1>
            <p className="font-helvetica font-normal text-xl mb-8 text-gray-700">
              With over 20 years of industry-leading expertise, Allion Insurance Brokers Ltd delivers bespoke coverage solutions tailored to your needs. Experience unparalleled service and peace of mind with Kenya’s premier brokerage.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/quote" 
                className="font-helvetica font-bold bg-auburn hover:bg-opacity-90 text-white px-8 py-3 rounded-lg text-center transition-colors"
              >
                Request a Quote
              </Link>
              <Link 
                to="/plans" 
                className="font-helvetica font-bold border-2 border-oda-blue text-oda-blue hover:bg-oda-blue hover:text-white px-8 py-3 rounded-lg text-center transition-colors"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>
          
          {/* Card grid */}
          <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 border-t-4 border-airforce-blue">
              <div className="h-12 w-12 bg-airforce-blue rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-helvetica font-bold text-oda-blue text-xl mb-2">Industry-Leading Expertise</h3>
              <p className="font-helvetica text-gray-700">Delivering tailored solutions with integrity and professionalism.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-helvetica font-bold text-3xl text-oda-indigo">KES 77K</span>
                <button className="bg-oda-indigo text-white p-2 rounded-full hover:bg-airforce-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg p-6 shadow-lg transform transition-transform hover:scale-105 border-t-4 border-auburn">
              <div className="h-12 w-12 bg-auburn rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-helvetica font-bold text-oda-blue text-xl mb-2">Comprehensive Protection</h3>
              <p className="font-helvetica text-gray-700">Safeguarding your assets with bespoke policy design.</p>
              <div className="mt-4 flex justify-between items-center">
                <span className="font-helvetica font-bold text-3xl text-oda-indigo">100%</span>
                <button className="bg-oda-indigo text-white p-2 rounded-full hover:bg-airforce-blue transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Partners section with more subtle styling */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <p className="font-helvetica font-light text-center text-gray-600 text-sm mb-6">Trusted by leading companies</p>
          <div className="flex flex-wrap justify-center gap-8 text-gray-500">
            <div className="font-helvetica font-bold">Sigma Feeds</div>
            <div className="font-helvetica font-bold">Irvines</div>
            <div className="font-helvetica font-bold">Hass</div>
            <div className="font-helvetica font-bold">Van</div>
            <div className="font-helvetica font-bold">San</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;