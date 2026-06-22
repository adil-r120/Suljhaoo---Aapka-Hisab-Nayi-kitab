import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import MagneticWrapper from './ui/MagneticWrapper';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for sticky states and active section highlighting
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['features', 'why-suljhaoo', 'pricing'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Features', href: '#features', id: 'features' },
    { label: 'Why Suljhaoo', href: '#why-suljhaoo', id: 'why-suljhaoo' },
    { label: 'Pricing', href: '#pricing', id: 'pricing' },
  ];

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm transition-all duration-300 ${isScrolled ? 'py-3.5' : 'py-5'
          }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo Left */}
          <a href="#" className="flex items-center">
            <Logo />
          </a>

          {/* Menu Center/Right for Desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="relative text-sm font-semibold text-gray-700 hover:text-brand-purple transition-colors py-2 px-1"
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-brand rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Right Download Button */}
          <div className="hidden md:flex items-center">
            <MagneticWrapper>
              <motion.a
                href="#download"
                className="bg-gradient-brand text-white font-bold text-sm px-8 py-3 rounded-2xl flex items-center justify-center hover:opacity-95 shadow-md shadow-brand-purple/15 transition-all duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="relative z-10">
                  Download
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.a>
            </MagneticWrapper>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-brand-purple p-1.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

      </motion.header>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav"
            role="navigation"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-40 bg-white pt-24 px-6 flex flex-col md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col gap-6 text-center">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-lg font-bold py-2 ${activeSection === item.id
                      ? 'text-brand-purple border-b-2 border-brand-purple'
                      : 'text-gray-800'
                    }`}
                >
                  {item.label}
                </a>
              ))}

              <motion.a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-8 bg-gradient-brand text-white font-bold text-base py-3.5 px-8 rounded-2xl flex items-center justify-center"
                whileTap={{ scale: 0.97 }}
              >
                Download
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
