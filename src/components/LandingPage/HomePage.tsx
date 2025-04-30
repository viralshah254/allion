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
            <h2 className="font-helvetica font-bold text-3xl text-oda-blue mb-6">
              Your Gateway to Financial Investment
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-helvetica text-gray-700 mb-6">
                At Allion, we understand that insurance is more than just a policy—it's a crucial investment in your future.
                Our tailored solutions are designed to provide protection and peace of mind for individuals, families, and businesses.
              </p>
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-seasalt p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-airforce-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Comprehensive Coverage</h3>
                <p className="font-helvetica text-gray-600">Protection for what matters most with policies tailored to your unique needs.</p>
              </div>
              
              <div className="bg-seasalt p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-auburn rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Financial Security</h3>
                <p className="font-helvetica text-gray-600">Expert guidance to help you build a strong financial foundation for the future.</p>
              </div>
              
              <div className="bg-seasalt p-6 rounded-lg shadow-md">
                <div className="h-16 w-16 bg-oda-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Personalized Service</h3>
                <p className="font-helvetica text-gray-600">Dedicated advisors who understand your unique needs and goals.</p>
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