'use client';

import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope, FaArrowUp } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          {/* Company Info */}
          <div className="max-w-md">
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.png"
                alt="ARTHAJIVA Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6">
              Comprehensive digital solutions for websites, applications, and platform migration using modern technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#437B7E] transition-colors duration-200">
                <FaTwitter className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#437B7E] transition-colors duration-200">
                <FaLinkedin className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#437B7E] transition-colors duration-200">
                <FaInstagram className="text-lg" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-[#437B7E] transition-colors duration-200">
                <FaEnvelope className="text-lg" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-[#437B7E] transition-colors duration-200">Home</a></li>
              <li><a href="#about" className="hover:text-[#437B7E] transition-colors duration-200">About</a></li>
              <li><a href="#client" className="hover:text-[#437B7E] transition-colors duration-200">Client</a></li>
              <li><a href="#contact" className="hover:text-[#437B7E] transition-colors duration-200">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © PT Arthajiva Solusi Kreatif, 2024. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="flex items-center space-x-2 text-gray-400 hover:text-[#437B7E] transition-colors duration-200"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
}