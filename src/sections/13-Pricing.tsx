import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { pricingPlans } from '../data/pricing';
import type { PricingPlan } from '../types/pricing.types';
import SectionHeading from '../components/ui/SectionHeading';
import ParallaxOrb from '../components/ui/ParallaxOrb';

export const Pricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const plans: PricingPlan[] = pricingPlans;



  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="pricing">
      {/* Background Parallax Orbs */}
      <ParallaxOrb 
        className="top-1/3 left-1/4 w-[500px] h-[500px] bg-brand-purple/5 blur-[140px]" 
        speed={150} 
      />
      <ParallaxOrb 
        className="bottom-1/3 right-1/4 w-[500px] h-[500px] bg-brand-pink/5 blur-[140px]" 
        speed={-100} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={{ label: 'Simple & Fair Pricing' }}
          title={<>Plans That Grow With <span className="text-gradient">Your Dukaan</span></>}
          subtitle="Choose a plan that fits your business. Start free and scale up anytime with our transparent billing packages."
        />

        {/* Toggle Switch */}
        <div className="flex justify-center items-center gap-4 mb-16 select-none">
          <span className={`text-sm font-bold ${billingPeriod === 'monthly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Monthly
          </span>
          
          <button 
            type="button"
            role="switch"
            aria-checked={billingPeriod === 'yearly'}
            aria-label="Toggle yearly billing"
            onClick={() => setBillingPeriod(billingPeriod === 'monthly' ? 'yearly' : 'monthly')}
            className="w-16 h-9 bg-gray-200 border border-gray-300/40 rounded-full p-1 cursor-pointer flex items-center relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50"
          >
            <motion.div
              layout
              className="w-7 h-7 bg-gradient-brand rounded-full shadow-md"
              animate={{ x: billingPeriod === 'monthly' ? 0 : 28 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
            />
          </button>

          <span className={`text-sm font-bold flex items-center gap-1.5 ${billingPeriod === 'yearly' ? 'text-gray-900' : 'text-gray-400'}`}>
            Yearly
            <span className="bg-green-100 text-green-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wide">
              Save 25%
            </span>
          </span>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              className={`bg-white rounded-3xl p-5 sm:p-6 border flex flex-col justify-between relative group shadow-sm transition-all duration-300 ${
                plan.featured 
                  ? 'border-brand-purple hover:shadow-premium-hover hover:border-brand-purple/80 ring-2 ring-brand-purple/20' 
                  : 'border-brand-purple/10 hover:shadow-premium hover:border-brand-purple/30'
              }`}
              whileHover={{ y: -5 }}
            >
              {/* Highlight Tag */}
              {plan.featured && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-gradient-brand text-white font-extrabold text-[10px] uppercase tracking-widest px-4 py-1 rounded-full shadow-md">
                  Best Value
                </span>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-heading font-extrabold text-xl text-gray-900 text-left">{plan.name}</h3>
                <p className="text-gray-400 text-xs text-left mt-2 leading-relaxed min-h-[36px]">{plan.desc}</p>
                
                {/* Pricing values */}
                <div className="flex items-baseline gap-1 mt-6 text-left border-b border-gray-100 pb-6">
                  <span className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
                    ₹
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={billingPeriod}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.15 }}
                      >
                        {plan.price[billingPeriod]}
                      </motion.span>
                    </AnimatePresence>
                  </span>
                  <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                    / {billingPeriod === 'monthly' ? 'month' : 'month, billed yearly'}
                  </span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mt-6 text-left">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 text-xs text-gray-600 font-medium">
                      <Check size={14} className="text-brand-purple shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Call to Action */}
              <button
                type="button"
                className={`w-full font-bold py-3.5 px-6 rounded-2xl text-center text-sm transition-all duration-300 mt-8 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple/50 ${
                  plan.featured
                    ? 'bg-gradient-brand text-white shadow-lg shadow-brand-purple/20 hover:opacity-95'
                    : 'bg-gray-50 border border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
