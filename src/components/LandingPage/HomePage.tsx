import React from 'react';
import { motion } from 'framer-motion'
import { ChartBarIcon, BoltIcon, CubeIcon, UserCircleIcon } from '@heroicons/react/24/outline'
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
          <motion.div
            className="text-center my-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-helvetica font-bold text-3xl md:text-4xl text-oda-blue mb-6 animate-fadeIn">
              Pioneering Excellence in Insurance Brokerage
            </h2>
            <div className="max-w-3xl mx-auto">
              <p className="font-helvetica text-gray-700 mb-6 leading-relaxed animate-fadeIn delay-200">
                Partner with Kenya’s leading brokerage for tailored non‑life solutions across motor, fire, marine, and domestic lines. We negotiate with top insurers on your behalf, provide expert risk advisory, and streamline policy management—all under one roof.
              </p>
            </div>
          </motion.div>
          
          {/* Feature grid */}
          <motion.div
            className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.div
              className="bg-seasalt p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 bg-oda-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <BoltIcon className="h-8 w-8 text-white animate-bounce" />
              </div>
              <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Personalized Risk Advisory</h3>
              <p className="font-helvetica text-gray-600">Our experts analyze your exposures to recommend optimal cover from leading insurers—ensuring you pay only for what you need.</p>
            </motion.div>

            <motion.div
              className="bg-seasalt p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 bg-airforce-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <ChartBarIcon className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Comprehensive Market Access</h3>
              <p className="font-helvetica text-gray-600">Access competitive premiums and policy options by comparing offers from multiple insurers—all in one convenient portal.</p>
            </motion.div>

            <motion.div
              className="bg-seasalt p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 bg-auburn rounded-full flex items-center justify-center mx-auto mb-4">
                <CubeIcon className="h-8 w-8 text-white animate-spin" />
              </div>
              <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Claims Advocacy & Support</h3>
              <p className="font-helvetica text-gray-600">We advocate on your behalf during the claims process—liaising with insurers to expedite settlements and secure fair outcomes.</p>
            </motion.div>

            <motion.div
              className="bg-seasalt p-6 rounded-xl shadow-xl transform hover:scale-105 transition-transform duration-500 ease-in-out"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="h-16 w-16 bg-oda-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCircleIcon className="h-8 w-8 text-white animate-pulse" />
              </div>
              <h3 className="font-helvetica font-bold text-oda-indigo text-xl mb-2">Digital Policy Management</h3>
              <p className="font-helvetica text-gray-600">Manage all your policies across carriers in one dashboard, with renewal reminders, document storage, and side‑by‑side comparisons.</p>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;