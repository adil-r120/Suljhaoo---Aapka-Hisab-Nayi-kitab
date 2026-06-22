import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Laptop, CheckCircle, SmartphoneIcon, BarChart3, Users, QrCode } from 'lucide-react';

export const AppShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse coordinates state for 3D tilt
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const card = containerRef.current;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Normalize coordinates (limit max rotation to 10 degrees)
    setRotateX(-y / (box.height / 20));
    setRotateY(x / (box.width / 20));
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="app-showcase">
      {/* Subtle floating background patterns */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-brand-purple/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-pink/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          
          {/* Left Text details */}
          <div className="md:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-brand-pink/5 border border-brand-pink/10 rounded-full px-3.5 py-1.5 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
              <span className="text-xs font-bold text-brand-pink tracking-wider uppercase">Multi-Platform Sync</span>
            </div>
            
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 leading-tight">
              Manage From Your <span className="text-gradient">Phone, Tablet, or PC</span>
            </h2>
            
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed">
              Your business is always in your pocket. Register sales on your phone while walking around, and view advanced analytics on a tablet/desktop at the end of the day. Data syncs instantly across all devices.
            </p>

            {/* Checklist of features */}
            <div className="space-y-3.5 pt-2">
              {[
                'Instant barcode scanning using your phone camera',
                'Print direct invoices to thermal Bluetooth printers',
                'Custom staff logins with custom role permissions',
                'Automated daily backup to secure Indian servers',
              ].map((text, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle size={12} className="text-green-600" />
                  </div>
                  <span className="text-sm font-semibold text-gray-700">{text}</span>
                </div>
              ))}
            </div>

            {/* Badges container */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#download"
                className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <SmartphoneIcon size={28} className="text-brand-pink" />
                <div className="text-left leading-none">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Download for Android</span>
                  <span className="text-sm font-bold tracking-tight">Google Play</span>
                </div>
              </a>

              <a
                href="#download"
                className="flex items-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl px-5 py-3 shadow-lg hover:shadow-xl transition-all"
              >
                <Laptop size={28} className="text-brand-purple" />
                <div className="text-left leading-none">
                  <span className="text-[10px] text-gray-400 block uppercase font-medium">Download Desktop Client</span>
                  <span className="text-sm font-bold tracking-tight">Windows & macOS</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Mockup Showcase with 3D Mouse Tilt */}
          <div className="md:col-span-7 flex justify-center items-center">
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[500px] h-[360px] sm:h-[450px] cursor-pointer"
              style={{ perspective: 1000 }}
            >
              <motion.div
                className="w-full h-full relative"
                style={{ 
                  rotateX: rotateX, 
                  rotateY: rotateY,
                  transformStyle: 'preserve-3d'
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                
                {/* 1. TABLET MOCKUP (Background Layer) */}
                <div 
                  className="absolute inset-0 bg-white rounded-[2rem] border border-brand-purple/10 shadow-premium p-4 sm:p-5 flex flex-col space-y-4 overflow-hidden"
                  style={{ transform: 'translateZ(10px)' }}
                >
                  {/* Tablet Interface Header */}
                  <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-gradient-brand text-white flex items-center justify-center font-black text-xs">S</div>
                      <span className="font-extrabold text-[11px] tracking-tight text-gray-800">Suljhaoo Retailer Pro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Cloud Connected</span>
                    </div>
                  </div>

                  {/* Tablet Dashboard Contents */}
                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 flex-1 overflow-hidden">
                    {/* Sidebar */}
                    <div className="hidden sm:flex col-span-3 border-r border-gray-100 pr-2 flex-col gap-1.5 text-left">
                      {[
                        { icon: <BarChart3 size={11} />, label: 'Analytics', active: true },
                        { icon: <Users size={11} />, label: 'Customers', active: false },
                        { icon: <QrCode size={11} />, label: 'Barcodes', active: false },
                      ].map((item, idx) => (
                        <div 
                          key={idx} 
                          className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[9px] font-bold ${
                            item.active ? 'bg-brand-purple/5 text-brand-purple' : 'text-gray-500'
                          }`}
                        >
                          {item.icon} {item.label}
                        </div>
                      ))}
                    </div>

                    {/* Chart / Center */}
                    <div className="col-span-1 sm:col-span-9 space-y-3 text-left">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-bold text-gray-800">Sales Report</span>
                        <span className="text-[9px] text-brand-purple font-semibold bg-brand-purple/5 px-2 py-0.5 rounded-full">Last 7 Days</span>
                      </div>
                      
                      {/* Simulated Chart Bars */}
                      <div className="flex items-end justify-between h-20 bg-gray-50 rounded-xl p-3 border border-gray-100">
                        {[40, 60, 30, 85, 45, 95, 70].map((val, idx) => (
                          <div key={idx} className="w-5 bg-gradient-brand rounded-md relative group" style={{ height: `${val}%` }}>
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-[8px] font-bold px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                              {val}%
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Stock Summary Table */}
                      <div className="p-3 bg-gray-50 border border-gray-100 rounded-xl space-y-1">
                        <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold uppercase">
                          <span>Distributor</span>
                          <span>Order Status</span>
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-gray-700 font-semibold mt-1">
                          <span>Jaiswal Wholesalers</span>
                          <span className="text-green-600 bg-green-50 px-1.5 py-0.5 rounded font-bold">Shipped</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. PHONE MOCKUP (Layered on top / Forward depth) */}
                <div 
                  className="absolute right-4 bottom-4 w-[160px] sm:w-[190px] aspect-[9/18] bg-gray-900 rounded-[2rem] p-2 sm:p-2.5 shadow-2xl border-4 border-gray-800 overflow-hidden flex flex-col"
                  style={{ transform: 'translateZ(60px)' }}
                >
                  {/* Phone Screen Container */}
                  <div className="w-full h-full bg-white rounded-[1.6rem] overflow-hidden flex flex-col p-3 relative">
                    {/* Status Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gray-900 w-16 h-3.5 rounded-b-xl flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-gray-800" />
                    </div>

                    {/* App Header */}
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2 mt-2 text-left">
                      <span className="font-extrabold text-[9px] text-brand-purple">Quick Sale</span>
                      <span className="text-[8px] font-bold text-gray-400">Offline Mode</span>
                    </div>

                    {/* Camera Scanner Simulation */}
                    <div className="mt-3 flex-1 bg-gray-900 rounded-xl relative overflow-hidden flex flex-col justify-center items-center text-center p-2">
                      <div className="border-2 border-brand-pink/50 w-24 h-16 rounded-lg relative flex items-center justify-center">
                        <div className="absolute inset-x-2 h-0.5 bg-brand-pink animate-bounce" />
                        <span className="text-[7px] text-white/50 font-medium">Scanning Barcode...</span>
                      </div>
                      <span className="text-[8px] text-white font-semibold mt-2">Align item code</span>
                    </div>

                    {/* Bill Bottom Summary */}
                    <div className="mt-3 text-left">
                      <div className="flex justify-between items-center text-[9px] text-gray-400 font-bold mb-1">
                        <span>Items Added</span>
                        <span className="text-gray-800">3 Items</span>
                      </div>
                      <div className="flex justify-between items-center text-[10px] text-gray-900 font-extrabold border-t border-gray-100 pt-1.5">
                        <span>Total Due</span>
                        <span className="text-brand-pink">₹680</span>
                      </div>
                      <button type="button" className="w-full bg-gradient-brand text-white font-bold text-[9px] py-2 rounded-lg text-center shadow-md mt-2.5">
                        Confirm & Send Bill
                      </button>
                    </div>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
