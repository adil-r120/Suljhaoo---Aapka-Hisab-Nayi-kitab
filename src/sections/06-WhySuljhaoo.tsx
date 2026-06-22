import React, { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { WifiOff, Zap, Users2, BellRing, CloudLightning, ShieldAlert } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const leftBenefits = [
  {
    title: "100% Offline Capability",
    desc: "No internet? No problem. Record bills, manage stock, and log expenses offline. Synced automatically once online.",
    icon: <WifiOff size={20} className="text-white" />,
  },
  {
    title: "Lightning Fast Billing",
    desc: "Create GST-compliant bills in under 5 seconds. Search products, scan barcodes, and print directly via Bluetooth.",
    icon: <Zap size={20} className="text-white" />,
  },
  {
    title: "Multi-Staff Permission",
    desc: "Assign separate logins for store managers, cashiers, and delivery staff with granular security roles.",
    icon: <Users2 size={20} className="text-white" />,
  },
];

const rightBenefits = [
  {
    title: "Automated WhatsApp Alerts",
    desc: "Send friendly balance alerts and invoices. Customers can pay you back via UPI direct link embedded in bills.",
    icon: <BellRing size={20} className="text-white" />,
  },
  {
    title: "Secure Cloud Backups",
    desc: "Your data is fully encrypted and backed up daily. Never lose your business records, even if you lose your phone.",
    icon: <CloudLightning size={20} className="text-white" />,
  },
  {
    title: "Critical Low Stock Alerts",
    desc: "Get notified when items fall below safety limits, helping you maintain optimal inventory levels.",
    icon: <ShieldAlert size={20} className="text-white" />,
  },
];

export const WhySuljhaoo: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);
  const rightColRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  // Phone 3D tilt state
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!phoneRef.current) return;
    const rect = phoneRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -y / (rect.height / 15),
      y: x / (rect.width / 15),
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  // GSAP Entrance Animations
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        toggleActions: "play none none none"
      }
    });

    // Animate benefits sliding in
    tl.from(".benefit-left", {
      opacity: 0,
      x: -60,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out"
    }, 0);

    tl.from(".benefit-right", {
      opacity: 0,
      x: 60,
      stagger: 0.15,
      duration: 0.8,
      ease: "power2.out"
    }, 0);

    tl.from(phoneRef.current, {
      opacity: 0,
      scale: 0.85,
      y: 50,
      duration: 0.9,
      ease: "back.out(1.7)"
    }, 0.2);

    // Animate connector SVG paths drawing in
    tl.from(".connector-line", {
      strokeDashoffset: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power1.inOut"
    }, 0.5);

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-transparent relative overflow-hidden" 
      id="why-suljhaoo"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-xs font-bold text-brand-purple tracking-wider uppercase">Dukaan Ka Digital Sathi</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Why Shopkeepers Choose <span className="text-gradient">Suljhaoo</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            Built from scratch to solve local retail store struggles. Say goodbye to errors and hello to digital growth.
          </p>
        </div>

        {/* 3-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative">
          
          {/* Column 1: Left Benefits */}
          <div ref={leftColRef} className="lg:col-span-4 flex flex-col gap-10">
            {leftBenefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-left flex items-start gap-4 text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 group-hover:text-brand-purple transition-colors duration-200">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2: Center Phone Mockup */}
          <div className="lg:col-span-4 flex justify-center items-center relative h-[450px]">
            {/* Connection SVG Lines (rendered in desktop only) */}
            <svg className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none -z-10" viewBox="0 0 400 450" fill="none">
              {/* Left connectors */}
              <path className="connector-line" d="M 40 80 Q 150 120 180 220" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />
              <path className="connector-line" d="M 40 225 Q 150 225 180 225" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />
              <path className="connector-line" d="M 40 370 Q 150 330 180 230" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />

              {/* Right connectors */}
              <path className="connector-line" d="M 360 80 Q 250 120 220 220" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />
              <path className="connector-line" d="M 360 225 Q 250 225 220 225" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />
              <path className="connector-line" d="M 360 370 Q 250 330 220 230" stroke="url(#lineGrad)" strokeWidth="1.5" strokeDasharray="5,5" />

              <defs>
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7B2CBF" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#F048A8" stopOpacity="0.4" />
                </linearGradient>
              </defs>
            </svg>

            {/* Interactive Phone */}
            <div 
              ref={phoneRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-[210px] aspect-[9/18] bg-gray-950 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl p-2 cursor-pointer transition-transform duration-200"
              style={{
                perspective: 1000,
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale3d(1.02, 1.02, 1.02)`
              }}
            >
              {/* Screen container */}
              <div className="w-full h-full bg-[#FAF8FC] rounded-[2.2rem] overflow-hidden flex flex-col p-3.5 relative">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 w-16 h-3 rounded-b-xl" />
                
                {/* App Header */}
                <div className="flex items-center justify-between border-b border-gray-100 pb-2 mt-2">
                  <span className="font-extrabold text-[9px] text-brand-purple">Billing App</span>
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                </div>

                {/* Mobile Preview List */}
                <div className="flex-1 space-y-2.5 mt-3 text-left overflow-hidden">
                  <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-xs border border-purple-50">
                    <div>
                      <h6 className="font-bold text-[9px] text-gray-800">Detergent Powder</h6>
                      <p className="text-[7px] text-gray-400">Qty: 2 Packets</p>
                    </div>
                    <span className="text-[9px] font-bold text-gray-900">₹320</span>
                  </div>

                  <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-xs border border-purple-50">
                    <div>
                      <h6 className="font-bold text-[9px] text-gray-800">Refined Flour (1kg)</h6>
                      <p className="text-[7px] text-gray-400">Qty: 5 Bags</p>
                    </div>
                    <span className="text-[9px] font-bold text-gray-900">₹240</span>
                  </div>

                  <div className="flex justify-between items-center bg-white p-2 rounded-xl shadow-xs border border-purple-50">
                    <div>
                      <h6 className="font-bold text-[9px] text-gray-800">Dairy Milk (Family)</h6>
                      <p className="text-[7px] text-gray-400">Qty: 1 Bar</p>
                    </div>
                    <span className="text-[9px] font-bold text-gray-900">₹120</span>
                  </div>
                </div>

                {/* Total amount summary */}
                <div className="border-t border-gray-100 pt-2 text-left mt-auto">
                  <div className="flex justify-between items-center text-[10px] text-gray-800 font-extrabold">
                    <span>Total Bill</span>
                    <span className="text-brand-purple">₹680</span>
                  </div>
                  <button type="button" className="w-full bg-gradient-brand text-white font-extrabold text-[8px] py-2 rounded-lg text-center shadow-md mt-2">
                    Share Bill on WhatsApp
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Right Benefits */}
          <div ref={rightColRef} className="lg:col-span-4 flex flex-col gap-10">
            {rightBenefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="benefit-right flex items-start gap-4 text-left group"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform duration-200">
                  {benefit.icon}
                </div>
                <div>
                  <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 group-hover:text-brand-purple transition-colors duration-200">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-1.5">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySuljhaoo;
