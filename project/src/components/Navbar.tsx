import React, { useState } from 'react';
import { Menu, X, Home, FileText, User, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: 'Home', icon: <Home className="w-5 h-5" />, path: '/' },
    { title: 'Resume', icon: <FileText className="w-5 h-5" />, path: '/resume' },
    { title: 'About', icon: <User className="w-5 h-5" />, path: '/about' },
    { title: 'Contact', icon: <Mail className="w-5 h-5" />, path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-800 opacity-0 animate-fadeInUp">
              Portfolio
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center space-x-1 transition-colors duration-200 opacity-0 animate-fadeInUp ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden animate-fadeInUp">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item, index) => (
              <Link
                key={item.title}
                to={item.path}
                className={`flex items-center space-x-2 w-full px-3 py-2 rounded-md transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;