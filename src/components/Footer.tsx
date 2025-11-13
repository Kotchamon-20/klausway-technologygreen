import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedinIcon, GithubIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import Logo from '../Photo/Logo.png';
export function Footer() {
  return <footer className="bg-teal-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />
              <span className="text-white font-bold text-xl">
                TechSolutions
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              Empowering businesses with next-gen CMS and IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <GithubIcon size={20} />
              </a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-teal-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-teal-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm hover:text-teal-400 transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-teal-400 transition-colors">
                  IT Consulting
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-teal-400 transition-colors">
                  CMS Development
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-teal-400 transition-colors">
                  IT Support
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-teal-400 transition-colors">
                  Cybersecurity
                </Link>
              </li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPinIcon size={18} className="text-teal-400 mt-1 flex-shrink-0" />
                <span className="text-sm">
                  123 Tech Street, San Francisco, CA 94105
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon size={18} className="text-teal-400 flex-shrink-0" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon size={18} className="text-teal-400 flex-shrink-0" />
                <span className="text-sm">info@techsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2024 TechSolutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
}