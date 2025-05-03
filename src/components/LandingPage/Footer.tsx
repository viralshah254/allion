import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-oda-blue text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="font-helvetica font-bold text-2xl block mb-4">ALLION</Link>
            <p className="font-helvetica font-light mb-4">
              Securing your future with confidence since 1995. Providing peace of mind through comprehensive insurance solutions.
            </p>
          </div>
          
          {/* Quick links */}
          <div className="col-span-1">
            <h3 className="font-helvetica font-bold text-lg mb-4">Insurance</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/motor" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Motor Insurance</Link>
              </li>
              <li>
                <Link to="/fire" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Fire Insurance</Link>
              </li>
              <li>
                <Link to="/marine" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Marine Insurance</Link>
              </li>
              <li>
                <Link to="/domestic" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Domestic Insurance</Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div className="col-span-1">
            <h3 className="font-helvetica font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="font-helvetica font-light hover:text-airforce-blue transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/careers" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Careers</Link>
              </li>
              <li>
                <Link to="/press" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Press</Link>
              </li>
              <li>
                <Link to="/testimonials" className="font-helvetica font-light hover:text-airforce-blue transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/dashboard" className="font-helvetica font-bold hover:text-airforce-blue transition-colors">Client Dashboard</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-helvetica font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="font-helvetica font-light">Allion Insurance Brokers Limited</li>
              <li className="font-helvetica font-light">Mombasa (Head Office): Nyali Bazaar Building, Kongowea</li>
              <li className="font-helvetica font-light">Nairobi: S&M Properties Building, Mwambao Road, Parklands</li>
              <li className="font-helvetica font-light">Postal Address: P.O. Box 90049 Code 80100 Mombasa</li>
              <li className="font-helvetica font-light">Tel: 0722 786881, 0716 786052</li>
              <li className="font-helvetica font-light">Email: <a href="mailto:info@allioninsurance.com" className="hover:text-airforce-blue">info@allioninsurance.com</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="bg-oda-indigo py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-helvetica font-light text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Allion Insurance. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="font-helvetica font-light text-sm hover:text-airforce-blue transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="font-helvetica font-light text-sm hover:text-airforce-blue transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="font-helvetica font-light text-sm hover:text-airforce-blue transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;