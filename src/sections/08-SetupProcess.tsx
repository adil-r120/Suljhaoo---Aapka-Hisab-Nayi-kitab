import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, UserCheck, Receipt } from 'lucide-react';

const steps = [
  {
    stepNum: "01",
    title: "Quick Sign Up",
    desc: "Install the app, enter your phone number, and verify with OTP. Input your shop name and category in under 10 seconds.",
    icon: <UserPlus size={24} className="text-white" />,
  },
  {
    stepNum: "02",
    title: "Add Customers & Products",
    desc: "Import customer contacts directly from your phone. Add your inventory items manually or use our pre-built 50k item library.",
    icon: <UserCheck size={24} className="text-white" />,
  },
  {
    stepNum: "03",
    title: "Start Recording Sales",
    desc: "Start billing immediately! Print thermal invoices or tap 'Share WhatsApp' to send automated, digital credit statements.",
    icon: <Receipt size={24} className="text-white" />,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
    },
  },
};

export const SetupProcess: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="setup">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-xs font-bold text-brand-purple tracking-wider uppercase">Easy 3-Step Setup</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Get Started in <span className="text-gradient">Under 5 Minutes</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            Setting up your digital store is simple. Follow these three quick steps to transform your shop management today.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Horizontal Connection Line with Glowing Particle (desktop only) */}
          <div className="absolute top-1/2 left-[12%] right-[12%] -translate-y-1/2 w-[76%] h-6 hidden lg:block -z-10 overflow-visible">
            <svg className="w-full h-full overflow-visible" fill="none">
              {/* Faded track line */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                opacity="0.25"
              />
              {/* Dashed flowing line */}
              <line
                x1="0%"
                y1="50%"
                x2="100%"
                y2="50%"
                stroke="url(#timelineGrad)"
                strokeWidth="2"
                strokeDasharray="8 6"
                className="animate-dash-scroll"
              />
              <defs>
                <linearGradient id="timelineGrad" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#7B2CBF" />
                  <stop offset="50%" stopColor="#F048A8" />
                  <stop offset="100%" stopColor="#7B2CBF" />
                </linearGradient>
              </defs>
            </svg>
            
            {/* Glowing moving particle representing data/billing packets */}
            <motion.div
              className="absolute w-3.5 h-3.5 rounded-full bg-brand-pink shadow-[0_0_10px_#F048A8,0_0_20px_#F048A8] z-10 -translate-y-1/2"
              style={{ top: "50%" }}
              animate={{
                left: ["calc(0% - 7px)", "calc(100% - 7px)"]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-brand-purple/10 shadow-sm hover:shadow-premium hover:border-brand-purple/20 transition-all duration-300 relative text-left group"
                variants={itemVariants}
              >
                {/* Step Circle Header */}
                <div className="flex justify-between items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-brand flex items-center justify-center shadow-lg shadow-brand-purple/15">
                    {step.icon}
                  </div>
                  <span className="font-heading font-extrabold text-3xl text-brand-purple/15 group-hover:text-brand-purple/35 transition-colors duration-300">
                    {step.stepNum}
                  </span>
                </div>

                {/* Info Content */}
                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 group-hover:text-brand-purple transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm mt-3 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default SetupProcess;
