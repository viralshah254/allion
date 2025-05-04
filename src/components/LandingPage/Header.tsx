import React, { useState } from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <motion.header
      className="bg-white shadow-md text-oda-blue py-4"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="font-helvetica text-oda-blue font-bold text-2xl">
            ALLION
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="font-helvetica text-oda-indigo hover:text-auburn transition-colors">
            Home
          </Link>
          <Link to="/insurance-plans" className="font-helvetica text-oda-indigo hover:text-auburn transition-colors">
            Our Covers
          </Link>
          <Link to="/about" className="font-helvetica text-oda-indigo hover:text-auburn transition-colors">
            About Us
          </Link>
        
          <Link to="/dashboard" className="font-helvetica font-bold bg-auburn hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors">
            Log In
          </Link>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-oda-blue focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="container mx-auto px-6 py-3">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="font-helvetica py-2 text-oda-indigo hover:text-auburn transition-colors">
                Home
              </Link>
              <Link to="/insurance-plans" className="font-helvetica py-2 text-oda-indigo hover:text-auburn transition-colors">
                Our Covers
              </Link>
              <Link to="/about" className="font-helvetica py-2 text-oda-indigo hover:text-auburn transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="font-helvetica py-2 text-oda-indigo hover:text-auburn transition-colors">
                Get in Touch
              </Link>
              <Link to="/dashboard" className="font-helvetica font-bold bg-auburn hover:bg-opacity-90 text-white px-4 py-2 rounded-lg transition-colors w-full text-center">
                Log in
              </Link>
            </div>
          </div>
        </div>
      )}
    </motion.header>
  );
};

export default Header;