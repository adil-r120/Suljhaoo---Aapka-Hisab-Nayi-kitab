import React from 'react';
import { motion } from 'framer-motion';
import { WifiOff, HeartHandshake, ShieldCheck, SearchCode, Database } from 'lucide-react';

const points = [
  {
    title: "100% Offline Mode",
    desc: "Record and print bills even during power outages or zero-network zones. Rest easy knowing your business never halts.",
    icon: <WifiOff size={22} />,
    badge: "Local First"
  },
  {
    title: "Free Basic Tier",
    desc: "Our core ledger and basic digital invoicing tools remain free forever. Pay only when you need advanced multi-staff tools.",
    icon: <HeartHandshake size={22} />,
    badge: "No Hidden Costs"
  },
  {
    title: "Bank-Grade Security",
    desc: "All financial data is fully encrypted and synced using secure SSL protocols. Your records are entirely private.",
    icon: <ShieldCheck size={22} />,
    badge: "Safe & Encrypted"
  },
  {
    title: "100% Transparent",
    desc: "No sales commissions, no hidden surcharges. What you earn belongs to you entirely. Cancel paid subscriptions in one click.",
    icon: <SearchCode size={22} />,
    badge: "Fair Pricing"
  },
  {
    title: "Cloud Integrity",
    desc: "We run on highly reliable local cloud servers, guaranteeing 99.9% syncing uptime. Never lose a single ledger cell.",
    icon: <Database size={22} />,
    badge: "99.9% Uptime"
  }
];

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-pink/5 border border-brand-pink/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-pink animate-pulse" />
            <span className="text-xs font-bold text-brand-pink tracking-wider uppercase">Built On Trust</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Designed for Peace of Mind
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            We prioritize security, accessibility, and transparency above all else so you can focus on building your legacy.
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-brand-purple/10 hover:border-brand-purple/20 p-6 rounded-3xl text-left shadow-sm hover:shadow-premium transition-all duration-300 relative group flex flex-col justify-between cursor-default"
              whileHover={{ y: -5 }}
            >
              {/* Card Glow Highlight */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-pink/0 to-brand-pink/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Badge & Icon */}
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-brand text-white flex items-center justify-center shadow-md shadow-brand-purple/15">
                    {point.icon}
                  </div>
                  <span className="text-[9px] font-bold text-brand-purple bg-brand-purple/5 px-2 py-0.5 rounded-full">
                    {point.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h4 className="font-heading font-bold text-sm sm:text-base text-gray-900 group-hover:text-brand-purple transition-colors duration-200">
                  {point.title}
                </h4>
                <p className="text-gray-500 text-[11px] sm:text-xs leading-relaxed mt-2.5">
                  {point.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
