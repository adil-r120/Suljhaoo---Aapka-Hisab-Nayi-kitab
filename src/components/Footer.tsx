import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Mail, Phone, MapPin, Building2, Clock } from 'lucide-react';
import Logo from './Logo';

const scrollToTop = () => {
  const lenis = (window as unknown as { lenisInstance?: { scrollTo: (y: number) => void } }).lenisInstance;
  if (lenis) {
    lenis.scrollTo(0);
  } else {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
};

const productLinks = [
  { name: 'Core Features', href: '/#features' },
  { name: 'Interactive Demo', href: '/#demo' },
  { name: 'Onboarding Setup', href: '/#setup' },
  // { name: '90-Day Journey', href: '/#journey' },
  { name: 'Pricing Plans', href: '/#pricing' },
];

const trustLinks = [
  { name: 'Security & Trust', href: '/#trust' },
  { name: 'User Reviews', href: '/#testimonials' },
  // { name: 'Frequently Asked Questions', href: '/#faq' },
];

const socialLinks = [
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z"/>
      </svg>
    ),
    href: '#',
    label: 'Facebook'
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    href: '#',
    label: 'Instagram'
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
      </svg>
    ),
    href: '#',
    label: 'LinkedIn'
  },
  {
    icon: (
      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
    href: '#',
    label: 'X'
  }
];

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#F9F9F9] border-t border-gray-100 pt-16 pb-8 overflow-hidden text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Profile & Registrations */}
          <div className="space-y-5">
            <div className="w-32">
              <Logo showWordmark={true} size={32} />
            </div>
            <p className="text-gray-500 text-xs sm:text-sm leading-relaxed pr-2">
              Suljhaoo is a secure, offline-first operating system designed to digitize traditional registers (Khata) with instant billing, stock alerts, and automated WhatsApp updates.
            </p>
            <div className="space-y-2 pt-2 text-xs text-gray-500">
              <div className="flex items-center gap-2 font-semibold text-gray-700">
                <Building2 size={14} className="text-brand-purple" />
                <span>Valantech Solutions Pvt Ltd</span>
              </div>
              {/* <p className="pl-6 text-[11px] text-gray-400">CIN: U72900KA2026PTC184712</p> */}
            </div>
            <div className="flex gap-3.5 pt-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  aria-label={link.label}
                  className="text-gray-400 hover:text-brand-purple transition-colors"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Product & Feature Navigation */}
          <div>
            <h5 className="font-heading font-extrabold text-sm text-gray-900 mb-6 uppercase tracking-wider">Product</h5>
            <ul className="space-y-4">
              {productLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-500 hover:text-brand-purple text-sm transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Trust & Terms Policies */}
          <div>
            <h5 className="font-heading font-extrabold text-sm text-gray-900 mb-6 uppercase tracking-wider">Company & Legal</h5>
            <ul className="space-y-4">
              {trustLinks.map((item, idx) => (
                <li key={idx}>
                  <a href={item.href} className="text-gray-500 hover:text-brand-purple text-sm transition-colors font-medium">
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <Link to="/privacy" className="text-gray-500 hover:text-brand-purple text-sm transition-colors font-medium">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-purple text-sm transition-colors font-medium">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-500 hover:text-brand-purple text-sm transition-colors font-medium">
                  Refund & Cancellation Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Support */}
          <div className="space-y-6">
            <div>
              <h5 className="font-heading font-extrabold text-sm text-gray-900 mb-6 uppercase tracking-wider">Support & Office</h5>
              <div className="space-y-3.5 text-sm text-gray-600">
                <a href="mailto:support@valantech.com" className="flex items-center gap-2.5 hover:text-brand-purple transition-colors">
                  <Mail size={16} className="text-brand-purple shrink-0" />
                  <span>support@valantech.com</span>
                </a>
                <a href="tel:+918045678900" className="flex items-center gap-2.5 hover:text-brand-purple transition-colors">
                  <Phone size={16} className="text-brand-purple shrink-0" />
                  <span>+91 (80) 4567-8900</span>
                </a>
                <div className="flex items-start gap-2.5">
                  <MapPin size={16} className="text-brand-purple shrink-0 mt-0.5" />
                  <span className="text-xs leading-relaxed text-gray-500">
                    Kolkata, West Bengal, India
                  </span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <Clock size={16} className="text-brand-purple shrink-0" />
                  <span>Mon - Sat: 8:00 AM - 10:00 PM</span>
                </div>
              </div>
            </div>
            {/* <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#download"
                className="hover:scale-[1.03] transition-transform duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Get it on Google Play"
                  className="h-[40px] w-auto"
                />
              </a>
              <a
                href="#download"
                className="hover:scale-[1.03] transition-transform duration-200"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="Download on the App Store"
                  className="h-[40px] w-auto"
                />
              </a>
            </div>  */}
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-gray-200/80 pt-8 flex flex-col md:flex-row justify-center items-center text-center gap-4 relative">
          <p className="text-gray-500 text-xs sm:text-sm font-medium">
            &copy; {new Date().getFullYear()} Suljhaoo. All rights reserved. <span className="mx-2">&middot;</span> Powered by <span className="font-bold text-gray-800">Valantech</span>
          </p>

          {/* Back to Top button in footer bottom right area */}
          <button
            type="button"
            onClick={scrollToTop}
            className="hidden md:flex absolute right-0 w-8 h-8 rounded-full bg-gray-200 hover:bg-brand-purple text-gray-500 hover:text-white items-center justify-center transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
