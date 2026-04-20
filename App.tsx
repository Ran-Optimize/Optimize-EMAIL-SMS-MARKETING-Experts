import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import Home from './pages/Home';
import Emails from './pages/Emails';
import Results from './pages/Results';
import Footer from './components/Footer';
import { useTheme } from './components/ThemeProvider';

import ScrollToTop from './components/ScrollToTop';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, setTheme } = useTheme();

  const navLinks = [
    { name: 'דף הבית', path: '/' },
    { name: 'מיילים של לקוחות', path: '/emails' },
    { name: 'קייס סטאדי ותוצאות', path: '/results' },
  ];

  const handleCtaClick = () => {
    const contactEl = document.getElementById('contact-quick') || document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    } else if (pathname !== '/') {
      window.location.href = '#/';
      setTimeout(() => {
        const el = document.getElementById('contact-quick') || document.getElementById('contact');
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <Link to="/" className="text-2xl font-black bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 bg-clip-text text-transparent">
              OPTIMIZE
            </Link>
            
            <div className="hidden lg:flex items-center gap-3 border-r border-gray-200 dark:border-white/10 pr-4 mr-2">
              <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-all group">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Shopify_Logo.png" alt="Shopify" className="h-4 group-hover:grayscale transition-all" />
                 <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 uppercase">Partner</span>
              </div>
              <div className="flex items-center gap-1.5 opacity-70 hover:opacity-100 transition-all group">
                 <img src="https://my.flashy.app/he/assets/images/partners/icon-logo-blue.png" alt="Flashy" className="h-5 group-hover:grayscale transition-all" />
                 <span className="text-[10px] font-bold text-gray-500 dark:text-white/50 uppercase">Partner</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    pathname === link.path ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                onClick={handleCtaClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-bold transition-all transform hover:scale-105"
              >
                תתחילו להרוויח
              </button>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-black/95 border-b border-gray-200 dark:border-white/10 animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-right">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-4 rounded-md text-base font-medium ${
                  pathname === link.path ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <button 
              onClick={handleCtaClick}
              className="w-full mt-4 bg-blue-600 text-white py-4 rounded-xl font-bold"
            >
              תתחילו להרוויח
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-white flex flex-col transition-colors duration-300">
        <Navbar />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/emails" element={<Emails />} />
            <Route path="/results" element={<Results />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;