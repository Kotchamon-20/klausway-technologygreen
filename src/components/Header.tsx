import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    path: '/',
    label: 'Home'
  }, {
    path: '/about',
    label: 'About'
  }, {
    path: '/services',
    label: 'Services'
  }, {
    path: '/portfolio',
    label: 'Portfolio'
  }, {
    path: '/blog',
    label: 'Blog'
  }, {
    path: '/contact',
    label: 'Contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-teal-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo-klaus.svg" alt="Logo" className="w-10 h-10 object-contain" />
            <span className="text-white font-bold text-xl">Klausway Technology</span>
          </Link>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors ${location.pathname === link.path ? 'text-teal-400' : 'text-gray-300 hover:text-teal-400'}`}>
                {link.label}
              </Link>)}
            <Link to="/contact" className="px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-teal-500/50 transition-all">
              Get Started
            </Link>
          </nav>
          {/* Mobile Menu Button */}
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden text-white">
            {isMobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden py-4 bg-teal-900/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsMobileMenuOpen(false)} className={`text-sm font-medium px-4 py-2 ${location.pathname === link.path ? 'text-teal-400' : 'text-gray-300'}`}>
                  {link.label}
                </Link>)}
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mx-4 px-6 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg font-medium text-center">
                Get Started
              </Link>
            </nav>
          </div>}
      </div>
    </header>;
}