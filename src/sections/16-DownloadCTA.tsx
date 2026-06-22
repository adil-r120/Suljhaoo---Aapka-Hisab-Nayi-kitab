import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Star, Download, Shield, Wifi } from 'lucide-react';
import ParallaxOrb from '../components/ui/ParallaxOrb';
import MagneticWrapper from '../components/ui/MagneticWrapper';

const stats = [
  { value: '50K+', label: 'Active Shops' },
  { value: '4.8★', label: 'App Rating' },
  { value: '100%', label: 'Offline Ready' },
  { value: 'Free', label: 'Basic Plan' },
];

const highlights = [
  { icon: <Shield size={15} className="text-brand-purple" />, text: 'Bank-grade encrypted data' },
  { icon: <Wifi size={15} className="text-brand-purple" />, text: 'Works without internet' },
  { icon: <Star size={15} className="text-brand-purple" />, text: '4.8 star rated by shopkeepers' },
];

export const DownloadCTA: React.FC = () => {

  return (
    <section
      id="download"
      className="py-24 bg-transparent relative overflow-hidden"
      aria-label="Download Suljhaoo App"
    >
      {/* Background blobs */}
      <ParallaxOrb 
        className="top-0 left-1/4 w-[600px] h-[600px] bg-brand-purple/6 blur-[160px]" 
        speed={150} 
      />
      <ParallaxOrb 
        className="bottom-0 right-1/4 w-[500px] h-[500px] bg-brand-pink/6 blur-[140px]" 
        speed={-100} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-xs font-bold text-brand-purple tracking-wider uppercase">Free Download</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Get <span className="text-gradient">Suljhaoo</span> on Your Phone
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            Start digitizing your shop today. Free plan available, no credit card required.
          </p>
        </div>

        {/* Main Download Card */}
        <motion.div
          className="max-w-5xl mx-auto bg-white rounded-3xl border border-brand-purple/10 shadow-premium overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Left: Gradient Panel */}
            <div className="bg-gradient-brand p-10 sm:p-14 flex flex-col justify-between relative overflow-hidden">
              {/* Decorative orbs inside panel */}
              <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 rounded-full blur-xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-white/10 rounded-full blur-xl pointer-events-none" />

              <div className="relative z-10">
                {/* App Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center mb-6 shadow-lg">
                  <Smartphone size={32} className="text-white" />
                </div>

                <h3 className="font-heading font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-3">
                  Suljhaoo App
                </h3>
                <p className="text-white text-sm leading-relaxed mb-8 font-medium">
                  Dukaan Ki Har Uljhan Ka Hal — your complete digital shop assistant in one app.
                </p>

                {/* Feature highlights */}
                <div className="space-y-3">
                  {highlights.map((h, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-white/10 rounded-xl px-3.5 py-2.5">
                      <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center shrink-0">
                        {h.icon}
                      </div>
                      <span className="text-white text-xs font-semibold">{h.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats row */}
              <div className="relative z-10 grid grid-cols-2 gap-3 mt-10">
                {stats.map((s, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/20 rounded-2xl p-3 text-center">
                    <div className="text-white font-extrabold text-lg leading-none">{s.value}</div>
                    <div className="text-white text-[10px] font-semibold mt-1 tracking-wide">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Download Buttons */}
            <div className="p-10 sm:p-14 flex flex-col justify-center gap-6">

              <div>
                <h4 className="font-heading font-extrabold text-2xl text-gray-900 mb-2">
                  Download Free Today
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Available on Android and iOS. One app to manage your entire dukaan — billing, stock, udhar, and reports.
                </p>
              </div>

              {/* Google Play Button */}
              <MagneticWrapper>
                <motion.a
                  href="#"
                  aria-label="Download Suljhaoo on Google Play Store (Coming Soon)"
                  className="relative flex items-center gap-4 bg-gray-950 text-white rounded-2xl px-6 py-4 group transition-all duration-300 hover:bg-gray-800 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Play Store icon */}
                  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.18 23.76A2.12 2.12 0 0 1 2 21.85V2.15C2 1.49 2.38.96 2.96.64l11.7 11.36-11.48 11.76Z" fill="#EA4335"/>
                    <path d="M20.56 10.37 17.4 8.6l-3.28 3.17 3.28 3.18 3.2-1.8a2.12 2.12 0 0 0 0-2.78Z" fill="#FBBC04"/>
                    <path d="M2.96.64 14.66 12 17.4 9.26 5.06.08A2.12 2.12 0 0 0 2.96.64Z" fill="#4285F4"/>
                    <path d="M2.96 23.36a2.12 2.12 0 0 0 2.1-.28l12.34-9.18-2.74-2.74L2.96 23.36Z" fill="#34A853"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Get it on</div>
                    <div className="font-bold text-base leading-tight">Google Play</div>
                  </div>
                  {/* Coming Soon Badge */}
                  <span className="absolute -top-2.5 -right-2.5 bg-amber-400 text-gray-900 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </motion.a>
              </MagneticWrapper>

              {/* App Store Button */}
              <MagneticWrapper>
                <motion.a
                  href="#"
                  aria-label="Download Suljhaoo on Apple App Store (Coming Soon)"
                  className="relative flex items-center gap-4 bg-gray-950 text-white rounded-2xl px-6 py-4 group transition-all duration-300 hover:bg-gray-800 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Apple icon */}
                  <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">Download on the</div>
                    <div className="font-bold text-base leading-tight">App Store</div>
                  </div>
                  {/* Coming Soon Badge */}
                  <span className="absolute -top-2.5 -right-2.5 bg-amber-400 text-gray-900 text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full shadow-sm">
                    Coming Soon
                  </span>
                </motion.a>
              </MagneticWrapper>

              {/* QR Code */}
              <div className="flex items-center gap-5 p-5 bg-gray-50 rounded-2xl border border-gray-100">
                {/* SVG QR Placeholder */}
                <div className="w-20 h-20 shrink-0 bg-white rounded-xl border-2 border-brand-purple/20 flex items-center justify-center p-2 shadow-sm">
                  <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* QR border modules */}
                    <rect x="5" y="5" width="35" height="35" rx="4" fill="#7B2CBF" opacity="0.15"/>
                    <rect x="10" y="10" width="25" height="25" rx="3" fill="#7B2CBF" opacity="0.3"/>
                    <rect x="15" y="15" width="15" height="15" rx="2" fill="#7B2CBF"/>
                    <rect x="60" y="5" width="35" height="35" rx="4" fill="#7B2CBF" opacity="0.15"/>
                    <rect x="65" y="10" width="25" height="25" rx="3" fill="#7B2CBF" opacity="0.3"/>
                    <rect x="70" y="15" width="15" height="15" rx="2" fill="#7B2CBF"/>
                    <rect x="5" y="60" width="35" height="35" rx="4" fill="#7B2CBF" opacity="0.15"/>
                    <rect x="10" y="65" width="25" height="25" rx="3" fill="#7B2CBF" opacity="0.3"/>
                    <rect x="15" y="70" width="15" height="15" rx="2" fill="#7B2CBF"/>
                    {/* Center modules */}
                    <rect x="45" y="45" width="10" height="10" rx="2" fill="#F048A8"/>
                    <rect x="60" y="50" width="6" height="6" rx="1" fill="#7B2CBF"/>
                    <rect x="50" y="60" width="8" height="8" rx="1" fill="#7B2CBF"/>
                    <rect x="70" y="65" width="6" height="6" rx="1" fill="#7B2CBF"/>
                    <rect x="60" y="75" width="10" height="10" rx="1" fill="#7B2CBF"/>
                    <rect x="80" y="50" width="6" height="6" rx="1" fill="#F048A8"/>
                    <rect x="45" y="75" width="8" height="8" rx="1" fill="#7B2CBF"/>
                  </svg>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-1.5">
                    <Download size={12} className="text-brand-purple" />
                    Scan to Download
                  </p>
                  <p className="text-[11px] text-gray-500 leading-snug">
                    Point your camera at the QR code to get the app instantly.
                  </p>
                  <span className="text-[10px] font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded-full mt-2 inline-block">
                    Link Coming Soon
                  </span>
                </div>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DownloadCTA;
