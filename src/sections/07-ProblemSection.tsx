import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle2, Frown, Smile } from 'lucide-react';

const painPoints = [
  {
    title: "Paper registers (Bhai Khata) get lost, torn, or wet.",
    desc: "Losing a register means losing months of customer credit details forever."
  },
  {
    title: "Manual calculation errors lead to cash losses.",
    desc: "Slight math errors during busy hours accumulate to thousands of rupees lost."
  },
  {
    title: "Awkwardly chasing customers for credit (Udhar).",
    desc: "Calling customers repeatedly for payments feels unprofessional and damages relations."
  },
  {
    title: "Blind business operation with no profit tracking.",
    desc: "Hard to know exactly which items are profitable or how much cash is in hand."
  }
];

const solutions = [
  {
    title: "Automated, secure cloud backups daily.",
    desc: "Your records are always safe and accessible from any smartphone, 24/7."
  },
  {
    title: "100% accurate digital calculations.",
    desc: "Compute items, discounts, GST, and totals instantly without mistakes."
  },
  {
    title: "Automatic WhatsApp payment links.",
    desc: "Polite automated payment reminders let customers settle balances via UPI instantly."
  },
  {
    title: "End-of-day sales reports in one tap.",
    desc: "See daily profit, margins, expenses, and low-stock alerts on a single screen."
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

const columnVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15
    }
  }
};

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="problems">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-pink/5 border border-brand-pink/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
            <span className="text-xs font-bold text-brand-pink tracking-wider uppercase">Problem vs. Solution</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Stop Straining Your Business With <span className="text-gradient">Old Methods</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            See how upgrading to a digital store manager turns shopkeeping hurdles into smooth growth.
          </p>
        </div>

        {/* Comparison Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* PAIN POINTS COLUMN */}
          <motion.div 
            className="bg-white rounded-3xl p-6 sm:p-10 border border-red-100 shadow-sm flex flex-col justify-between"
            variants={columnVariants}
          >
            <div>
              <div className="flex items-center gap-3 border-b border-red-50 pb-5 mb-8">
                <div className="w-10 h-10 rounded-xl bg-red-50 text-red-500 flex items-center justify-center">
                  <Frown size={22} />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-extrabold text-lg text-gray-900">The Old Hard Way</h3>
                  <p className="text-xs text-red-500 font-bold uppercase tracking-wider mt-0.5">Manual Registers</p>
                </div>
              </div>

              <div className="space-y-6">
                {painPoints.map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-left group">
                    <XCircle size={20} className="text-red-500 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-800 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SOLUTIONS COLUMN */}
          <motion.div 
            className="bg-gradient-to-b from-brand-purple/5 to-brand-pink/5 rounded-3xl p-6 sm:p-10 border border-brand-purple/10 shadow-premium flex flex-col justify-between"
            variants={columnVariants}
          >
            <div>
              <div className="flex items-center gap-3 border-b border-purple-100/50 pb-5 mb-8">
                <div className="w-10 h-10 rounded-xl bg-brand-purple/10 text-brand-purple flex items-center justify-center">
                  <Smile size={22} className="stroke-[2.5px]" />
                </div>
                <div className="text-left">
                  <h3 className="font-heading font-extrabold text-lg text-gray-900">The Suljhaoo Way</h3>
                  <p className="text-xs text-brand-purple font-bold uppercase tracking-wider mt-0.5">Digital Store</p>
                </div>
              </div>

              <div className="space-y-6">
                {solutions.map((item, idx) => (
                  <div key={idx} className="flex gap-4 text-left group">
                    <CheckCircle2 size={20} className="text-brand-purple shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <div>
                      <h4 className="font-bold text-sm sm:text-base text-gray-800 leading-snug">
                        {item.title}
                      </h4>
                      <p className="text-gray-500 text-xs sm:text-sm mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};

export default ProblemSection;
