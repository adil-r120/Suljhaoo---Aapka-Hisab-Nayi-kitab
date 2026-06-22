import React from 'react';
import { motion } from 'framer-motion';
import { BadgeCheck, IndianRupee, ShieldAlert, ShoppingBag, Receipt, Truck, MessageSquareCode, FileLineChart } from 'lucide-react';

const items = [
  {
    title: "Every Sale Log",
    desc: "Instantly record transactions. Support Cash, UPI, Card, and Credit payments.",
    icon: <IndianRupee size={22} />,
    color: "text-purple-600 bg-purple-50",
  },
  {
    title: "Udhar Tracking",
    desc: "Maintain customer ledgers. Send friendly WhatsApp repayment links.",
    icon: <BadgeCheck size={22} />,
    color: "text-pink-600 bg-pink-50",
  },
  {
    title: "Stock Alerts",
    desc: "Real-time updates of inventory items. Automatic low stock notifications.",
    icon: <ShieldAlert size={22} />,
    color: "text-orange-600 bg-orange-50",
  },
  {
    title: "Purchases Ledger",
    desc: "Log orders sent to distributors. Keep tabs on supplier balances.",
    icon: <ShoppingBag size={22} />,
    color: "text-indigo-600 bg-indigo-50",
  },
  {
    title: "Expense Logbook",
    desc: "Track daily miscellaneous outgoings like electricity, rent, and wages.",
    icon: <Receipt size={22} />,
    color: "text-red-600 bg-red-50",
  },
  {
    title: "Delivery Status",
    desc: "Manage home deliveries. Track dispatching, routing, and cash collections.",
    icon: <Truck size={22} />,
    color: "text-blue-600 bg-blue-50",
  },
  {
    title: "WhatsApp Bills",
    desc: "Generate clean invoices with embedded payment links, sharing via chat.",
    icon: <MessageSquareCode size={22} />,
    color: "text-green-600 bg-green-50",
  },
  {
    title: "EOD Reports",
    desc: "Download daily summaries. Review cash-in-hand, sales, and total profit.",
    icon: <FileLineChart size={22} />,
    color: "text-cyan-600 bg-cyan-50",
  },
];

export const ShopkeeperFeatures: React.FC = () => {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="shopkeeper-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-3.5 py-1.5 w-fit mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-purple animate-pulse" />
            <span className="text-xs font-bold text-brand-purple tracking-wider uppercase">Tailored Shop Tools</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-gray-900 tracking-tight">
            Complete Toolkit for <span className="text-gradient">Modern Shopkeepers</span>
          </h2>
          <p className="text-gray-500 text-base sm:text-lg mt-3">
            Every feature is fine-tuned to mirror manual shop work processes, made digital, simple, and 100% secure.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white border border-brand-purple/10 hover:border-brand-purple/20 p-6 rounded-3xl text-left shadow-sm hover:shadow-premium transition-all duration-300 relative group cursor-default"
              whileHover={{ y: -4 }}
            >
              {/* Card Accent Top Line */}
              <div className="absolute top-0 inset-x-8 h-0.5 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Icon Container */}
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mb-5 ${item.color} group-hover:scale-105 transition-transform`}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <h4 className="font-heading font-bold text-base sm:text-lg text-gray-900 group-hover:text-brand-purple transition-colors duration-200">
                {item.title}
              </h4>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mt-2">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ShopkeeperFeatures;
