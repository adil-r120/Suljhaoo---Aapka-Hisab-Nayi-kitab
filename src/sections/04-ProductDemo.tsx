import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, Landmark, MessageSquare, ShieldCheck } from 'lucide-react';

export const ProductDemo: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  // Dynamic feedback states
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [isReordering, setIsReordering] = useState(false);
  const [isReordered, setIsReordered] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [isResent, setIsResent] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [isPrinted, setIsPrinted] = useState(false);



  const handleCreateInvoice = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsDone(true);
      setTimeout(() => setIsDone(false), 2000);
    }, 1200);
  };

  const handleReorder = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsReordering(true);
    setTimeout(() => {
      setIsReordering(false);
      setIsReordered(true);
      setTimeout(() => setIsReordered(false), 2000);
    }, 1200);
  };

  const handleResend = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResending(true);
    setTimeout(() => {
      setIsResending(false);
      setIsResent(true);
      setTimeout(() => setIsResent(false), 2000);
    }, 1000);
  };

  const handlePrint = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPrinting(true);
    setTimeout(() => {
      setIsPrinting(false);
      setIsPrinted(true);
      setTimeout(() => setIsPrinted(false), 2000);
    }, 1000);
  };

  const demoSteps = [
    {
      title: "1. Quick Billing",
      desc: "Select items from inventory and tap 'Generate Bill'. Standard GST or simple receipt created in seconds.",
      icon: <Landmark size={20} className="text-white" />,
      content: (
        <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-lg text-left h-full flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded-full">New Bill #2084</span>
              <span className="text-xs text-gray-400">June 2026</span>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                <span className="text-gray-500 font-medium">1x Basmati Rice (5kg)</span>
                <span className="font-bold text-gray-800">₹450</span>
              </div>
              <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                <span className="text-gray-500 font-medium">2x Mustard Oil (1L)</span>
                <span className="font-bold text-gray-800">₹360</span>
              </div>
              <div className="flex justify-between text-sm border-b border-gray-100 pb-2">
                <span className="text-gray-500 font-medium">5x Organic Sugar (1kg)</span>
                <span className="font-bold text-gray-800">₹225</span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between font-extrabold text-base text-gray-900 mb-3">
              <span>Total Amount</span>
              <span>₹1,035</span>
            </div>
            <button
              type="button"
              onClick={handleCreateInvoice}
              disabled={isGenerating || isDone}
              className={`w-full font-bold py-2.5 rounded-xl text-center text-sm shadow-md transition-all duration-300 ${isDone
                  ? 'bg-green-600 text-white shadow-green-100'
                  : isGenerating
                    ? 'bg-brand-purple/40 text-white cursor-not-allowed'
                    : 'bg-gradient-brand text-white hover:brightness-105 active:scale-95'
                }`}
            >
              {isGenerating ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Creating Invoice...
                </span>
              ) : isDone ? (
                "Invoice Created! ✔"
              ) : (
                "Create Invoice"
              )}
            </button>
          </div>
        </div>
      )
    },
    {
      title: "2. Real-Time Stock Updates",
      desc: "Your inventory adjusts automatically with every sale. Receive low stock alerts before running out.",
      icon: <ShieldCheck size={20} className="text-white" />,
      content: (
        <div className="bg-white rounded-2xl p-5 border border-purple-100 shadow-lg text-left h-full flex flex-col justify-between">
          <div>
            <h4 className="font-bold text-sm text-gray-900 mb-3">Stock Overview</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1 font-medium">
                  <span>Basmati Rice (5kg bag)</span>
                  <span className="font-bold text-green-600">42 Bags Left</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '84%' }} />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-xs text-gray-500 mb-1 font-medium">
                  <span>Mustard Oil (1L bottle)</span>
                  <span className="font-bold text-orange-500">5 Bottles Left</span>
                </div>
                <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-orange-500 rounded-full" style={{ width: '15%' }} />
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-100 p-3 rounded-xl flex items-start gap-2 mt-2">
                <span className="text-xs text-orange-700 leading-snug">
                  ⚠️ <strong>Low Stock Alert:</strong> Mustard Oil is running low. Tap to place quick order to distributor.
                </span>
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={handleReorder}
            disabled={isReordering || isReordered}
            className={`w-full font-semibold py-2.5 rounded-xl text-center text-sm shadow-md mt-4 transition-all duration-300 ${isReordered
                ? 'bg-green-600 text-white'
                : isReordering
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-gray-900 text-white hover:bg-gray-800 active:scale-95'
              }`}
          >
            {isReordering ? (
              <span className="flex items-center justify-center gap-2">
                <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Ordering Stock...
              </span>
            ) : isReordered ? (
              "Order Placed! ✔"
            ) : (
              "Reorder Inventory"
            )}
          </button>
        </div>
      )
    },
    {
      title: "3. Direct WhatsApp Share",
      desc: "Instantly send beautiful billing summaries and PDF download links to customer mobile numbers.",
      icon: <MessageSquare size={20} className="text-white" />,
      content: (
        <div className="bg-[#E7FFDB] rounded-2xl p-5 border border-green-200 shadow-lg text-left h-full flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-2 border-b border-green-200/50 pb-2">
              <div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-[10px]">S</div>
              <span className="text-xs font-bold text-green-800">Suljhaoo Assistant</span>
            </div>
            <p className="text-xs text-gray-800 leading-relaxed bg-white p-3 rounded-xl shadow-sm border border-green-100">
              Namaste <strong>Amit Ji</strong>! Aapka dukaan bill amount <strong>₹1,035</strong> hai.<br />
              <span className="text-blue-600 underline text-[10px] block mt-1">mystore.in/invoice/2084</span>
            </p>
            <p className="text-[10px] text-gray-500 text-center font-medium">✓ Delivered successfully</p>
          </div>
          <div className="mt-4 flex gap-2">
            <button
              type="button"
              onClick={handleResend}
              disabled={isResending || isResent}
              className={`flex-1 font-bold py-2.5 rounded-xl text-center text-xs shadow-sm transition-all duration-300 ${isResent ? 'bg-green-700 text-white' : 'bg-green-600 hover:bg-green-500 text-white active:scale-95'
                }`}
            >
              {isResending ? "Sending..." : isResent ? "Sent! ✔" : "Resend Bill"}
            </button>
            <button
              type="button"
              onClick={handlePrint}
              disabled={isPrinting || isPrinted}
              className={`flex-1 font-bold py-2.5 rounded-xl text-center text-xs transition-all duration-300 border ${isPrinted
                  ? 'bg-green-50 border-green-300 text-green-800'
                  : 'bg-white border-green-300 text-green-700 hover:bg-green-50/50 active:scale-95'
                }`}
            >
              {isPrinting ? "Printing..." : isPrinted ? "Printed! ✔" : "Print Receipt"}
            </button>
          </div>
        </div>
      )
    }
  ];

  // Auto transition demo player steps when active
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % demoSteps.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isOpen, demoSteps.length]);

  return (
    <section className="py-20 relative bg-transparent overflow-hidden" id="demo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            See How <span className="text-gradient">Suljhaoo</span> Works in 2 Minutes
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            Designed for local retail shops. Easy to learn, extremely fast to use, and works without an active internet connection.
          </p>
        </div>

        {/* Video Thumbnail Box */}
        <motion.div
          className="relative max-w-4xl mx-auto aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl border border-brand-purple/10 cursor-pointer group"
          onClick={() => setIsOpen(true)}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          {/* Realistic Video Thumbnail Background */}
          <img
            src="/assets/suljhaoo_kirana_shop.png"
            alt="Suljhaoo Kirana Shop"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-900/50 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
            {/* Pulsing Play Button */}
            <div className="relative z-10 flex items-center justify-center">
              <motion.div
                className="absolute w-24 h-24 rounded-full bg-brand-purple/30 -z-10"
                animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute w-20 h-20 rounded-full bg-white/20 -z-10"
                animate={{ scale: [1, 1.25, 1], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              />
              <div className="w-16 h-16 rounded-full bg-gradient-brand text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Play size={26} className="fill-white translate-x-0.5" />
              </div>
            </div>
          </div>

          {/* Graphical Mock Content underneath */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 pointer-events-none select-none">
            <div className="flex justify-between items-end">
              <div className="text-left text-white max-w-sm">
                <h4 className="font-heading font-extrabold text-lg sm:text-2xl drop-shadow-md">Dashboard Overview</h4>
                <p className="text-xs sm:text-sm text-white/80 mt-1 drop-shadow-sm">Watch the billing workflow and stock warnings update instantly.</p>
              </div>
              <span className="text-white/70 text-xs sm:text-sm font-semibold glass px-3 py-1 rounded-lg">2:00</span>
            </div>
          </div>
        </motion.div>

        {/* Video Player Modal */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Container */}
              <motion.div
                className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-purple/10 flex flex-col"
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              >
                {/* Header */}
                <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-heading font-bold text-base sm:text-lg text-gray-900">Interactive Product Tour</h3>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Player Interface */}
                <div className="grid grid-cols-1 md:grid-cols-12 bg-gray-50/50">

                  {/* Left Side: Step-by-Step Selectors */}
                  <div className="md:col-span-4 p-4 sm:p-6 flex flex-col justify-center space-y-2 sm:space-y-3 border-r border-gray-100">
                    {demoSteps.map((step, idx) => (
                      <button
                        type="button"
                        key={idx}
                        onClick={() => {
                          setActiveStep(idx);
                          setIsGenerating(false);
                          setIsDone(false);
                          setIsReordering(false);
                          setIsReordered(false);
                          setIsResending(false);
                          setIsResent(false);
                          setIsPrinting(false);
                          setIsPrinted(false);
                        }}
                        className={`w-full text-left p-4 rounded-2xl border transition-all flex items-start gap-3 cursor-pointer ${activeStep === idx
                            ? 'bg-white border-brand-purple shadow-sm'
                            : 'bg-transparent border-transparent hover:bg-white/50'
                          }`}
                      >
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${activeStep === idx ? 'bg-gradient-brand' : 'bg-gray-300'
                          }`}>
                          {step.icon}
                        </div>
                        <div>
                          <h5 className={`text-xs font-bold ${activeStep === idx ? 'text-brand-purple' : 'text-gray-700'}`}>
                            {step.title}
                          </h5>
                          <p className="text-[11px] text-gray-400 mt-0.5 leading-relaxed">{step.desc}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Right Side: Interactive Phone Display */}
                  <div className="md:col-span-8 bg-gray-100/50 p-4 sm:p-8 flex items-center justify-center min-h-[400px]">
                    <div className="w-full max-w-[340px] aspect-[4/5]">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={activeStep}
                          className="w-full h-full"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.3 }}
                        >
                          {demoSteps[activeStep].content}
                        </motion.div>
                      </AnimatePresence>
                    </div>
                  </div>

                </div>

                {/* Bottom Progress Tracker */}
                <div className="bg-white px-6 py-4 flex items-center gap-4 border-t border-gray-100">
                  <span className="text-xs font-bold text-brand-purple whitespace-nowrap">Auto Tour Progress:</span>
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden flex gap-1">
                    {demoSteps.map((_, idx) => (
                      <div key={idx} className="flex-1 h-full relative bg-gray-200">
                        {activeStep === idx && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-brand"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 4.5, ease: 'linear' }}
                          />
                        )}
                        {activeStep > idx && <div className="absolute inset-0 bg-gradient-brand" />}
                      </div>
                    ))}
                  </div>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default ProductDemo;
