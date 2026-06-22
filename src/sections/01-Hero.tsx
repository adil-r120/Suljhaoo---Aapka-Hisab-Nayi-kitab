import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Download, CheckCircle } from 'lucide-react';
import HeroBackground from '../three/HeroBackground';
import { getLenis } from '../lib/lenis';
import MagneticWrapper from '../components/ui/MagneticWrapper';

interface MessageItem {
  id: number;
  sender: string;
  text: string;
  type: 'credit' | 'whatsapp' | 'stock' | 'system';
  initials: string;
  meta: string;
  color: 'pink' | 'green' | 'amber' | 'purple' | 'red';
}

const MESSAGE_POOL: MessageItem[] = [
  { id: 1, sender: "Sunita (Customer)", text: '"Bhaiya, aaj udhaar pe de do. Agle hafte de dungi."', type: "credit", initials: "S", meta: "Pending: ₹420", color: "pink" },
  { id: 2, sender: "Vijay (Customer)", text: '"Kitna bill hua? Online payment kar raha hoon."', type: "whatsapp", initials: "V", meta: "✔✔ Sent via WhatsApp", color: "green" },
  { id: 3, sender: "Mahesh (Supplier)", text: '"Daal aur tel ka stock bhej diya hai, check kar lena."', type: "stock", initials: "M", meta: "Order Ref: #9041", color: "amber" },
  { id: 4, sender: "Ramesh (Customer)", text: '"Ramesh ji, is mahine ka udhaar clear kar do."', type: "credit", initials: "R", meta: "UPI Link Sent", color: "purple" },
  { id: 5, sender: "Kiran (Customer)", text: '"Aata ka packet khatam ho gaya, fresh stock kab aayega?"', type: "stock", initials: "K", meta: "Aata Stock Low", color: "amber" },
  { id: 6, sender: "Rajesh (Customer)", text: '"Bhaiya, bill WhatsApp pe send kar dena instant."', type: "whatsapp", initials: "R", meta: "✔✔ WhatsApp Bill", color: "green" },
  { id: 7, sender: "Amit (Customer)", text: '"Maine ₹1,500 chuka diye hain, ledger clear karein."', type: "credit", initials: "A", meta: "Udhar Cleared", color: "pink" },
  { id: 8, sender: "Rohan (Staff)", text: '"Evening cash drawer match ho gaya hai bhaiya."', type: "system", initials: "R", meta: "Staff Log: Rohan", color: "green" },
  { id: 9, sender: "Jeet (Customer)", text: '"Stock Alert: Sugar has fallen below 5kg limit."', type: "system", initials: "S", meta: "Low Stock Alert", color: "pink" },
  { id: 10, sender: "Priya (Customer)", text: '"Bhaiya, 2kg chawal aur 1L refined oil pack rakhna."', type: "whatsapp", initials: "P", meta: "✔✔ WhatsApp", color: "green" },
  { id: 11, sender: "Geeta (Buyer)", text: '"Maine paytm par ₹850 bhej diye hain."', type: "whatsapp", initials: "G", meta: "Payment Received", color: "green" },
  { id: 12, sender: "Karan (Supplier)", text: '"Agla delivery truck kal subah 10 baje aayega."', type: "stock", initials: "K", meta: "Delivery Scheduled", color: "amber" }
];

const bubblePositions = [
  {
    className: "absolute -top-4 -left-6 sm:-left-10 w-[150px] sm:w-[210px]",
    borderRadius: "rounded-2xl rounded-tl-none",
    yRange: [15, 0, -8, 0],
    floatDelay: 0.5,
    duration: 5
  },
  {
    className: "absolute top-[24%] -right-6 sm:-right-10 w-[160px] sm:w-[220px]",
    borderRadius: "rounded-2xl rounded-tr-none",
    yRange: [15, -10, 0, -10],
    floatDelay: 1.2,
    duration: 5.5
  },
  {
    className: "absolute bottom-[24%] -left-8 sm:-left-12 w-[160px] sm:w-[220px] hidden sm:block",
    borderRadius: "rounded-2xl rounded-bl-none",
    yRange: [15, 0, -6, 0],
    floatDelay: 0.2,
    duration: 6
  },
  {
    className: "absolute -bottom-4 -right-4 sm:-right-8 w-[150px] sm:w-[210px] hidden sm:block",
    borderRadius: "rounded-2xl rounded-tr-none",
    yRange: [15, -8, 0, -8],
    floatDelay: 1.8,
    duration: 4.8
  }
];

const getBubbleStyles = (color: string) => {
  switch (color) {
    case 'pink':
      return {
        bg: 'bg-white/95 border-brand-pink/20',
        avatarBg: 'bg-brand-pink/10 text-brand-pink',
        metaText: 'text-brand-pink'
      };
    case 'green':
      return {
        bg: 'bg-[#E7FFDB]/95 border-green-300/30',
        avatarBg: 'bg-green-600 text-white shadow-xs',
        metaText: 'text-green-600'
      };
    case 'amber':
      return {
        bg: 'bg-white/95 border-amber-300/20',
        avatarBg: 'bg-amber-500 text-white shadow-xs',
        metaText: 'text-amber-600 font-bold'
      };
    case 'purple':
      return {
        bg: 'bg-white/95 border-brand-purple/20',
        avatarBg: 'bg-brand-purple text-white shadow-xs',
        metaText: 'text-brand-purple font-bold'
      };
    case 'red':
      return {
        bg: 'bg-white/95 border-red-200/40',
        avatarBg: 'bg-red-600 text-white shadow-xs',
        metaText: 'text-red-600 font-bold'
      };
    default:
      return {
        bg: 'bg-white/95 border-gray-200',
        avatarBg: 'bg-gray-100 text-gray-700',
        metaText: 'text-gray-500'
      };
  }
};

// Handle Play Demo Click
const handlePlayDemo = (e: React.MouseEvent) => {
  e.preventDefault();
  const demoSection = document.getElementById('demo');
  if (demoSection) {
    const lenis = getLenis();
    if (lenis) lenis.scrollTo('#demo');
    else demoSection.scrollIntoView({ behavior: 'smooth' });
  }
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax scroll effects
  const { scrollY } = useScroll();
  const yLeft = useTransform(scrollY, [0, 500], [0, -50]);
  const yRight = useTransform(scrollY, [0, 500], [0, 80]);

  // Active message bubbles rotation state
  const [activeMessages, setActiveMessages] = useState<MessageItem[]>([
    MESSAGE_POOL[0],
    MESSAGE_POOL[1],
    MESSAGE_POOL[2],
    MESSAGE_POOL[3]
  ]);

  // Stable ref to always have the latest activeMessages inside the interval
  const activeMessagesRef = useRef(activeMessages);
  useEffect(() => {
    activeMessagesRef.current = activeMessages;
  }, [activeMessages]);

  // Single stable interval — no dependency on activeMessages
  useEffect(() => {
    const interval = setInterval(() => {
      // Pick a random position (0 to 3) to swap
      const posToSwap = Math.floor(Math.random() * 4);
      
      // Find a message from pool that is not currently shown in activeMessages
      const shownIds = activeMessagesRef.current.map(m => m.id);
      const availablePool = MESSAGE_POOL.filter(m => !shownIds.includes(m.id));
      
      if (availablePool.length > 0) {
        const randomNewMsg = availablePool[Math.floor(Math.random() * availablePool.length)];
        
        setActiveMessages(prev => {
          const updated = [...prev];
          updated[posToSwap] = randomNewMsg;
          return updated;
        });
      }
    }, 3500); // Rotate a message every 3.5 seconds

    return () => clearInterval(interval);
  }, []); // ← stable: single interval created once on mount



  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden"
      id="hero"
    >
      {/* 3D Background scene */}
      <HeroBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div 
            className="lg:col-span-6 flex flex-col space-y-6 text-left"
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {/* Trusted Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-purple/5 border border-brand-purple/10 rounded-full px-4 py-1.5 w-fit">
              <CheckCircle size={14} className="text-brand-purple animate-pulse" />
              <span className="text-xs font-bold text-brand-purple tracking-wide uppercase">
                Trusted by 50,000+ Shopkeepers in India
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-[32px] leading-[1.15] sm:text-5xl lg:text-6xl text-slate-700 sm:leading-tight tracking-tight">
              Dukaan Ki Har Uljhan Ka Hal <br />
              <span className="text-gradient">Suljhaoo</span>
            </h1>

            {/* Description */}
            <p className="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-xl">
              The ultimate store management platform. Record sales, track inventory, manage customer credit (Udhar), and share bills on WhatsApp automatically. 100% Offline-friendly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              {/* Primary Download */}
              <MagneticWrapper>
                <motion.a
                  href="#download"
                  className="bg-gradient-brand text-white font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 shadow-xl shadow-brand-purple/20 hover:shadow-brand-purple/35 transition-all group"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  Download App Free
                  <Download size={18} className="group-hover:translate-y-0.5 transition-transform" />
                </motion.a>
              </MagneticWrapper>

              {/* Secondary Demo */}
              <MagneticWrapper>
                <motion.button
                  onClick={handlePlayDemo}
                  className="glass border border-brand-purple/12 text-gray-800 font-bold px-8 py-4 rounded-2xl flex items-center justify-center gap-2 hover:bg-white/90 shadow-sm transition-all"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Play size={18} className="text-brand-purple fill-brand-purple/20" />
                  Watch 2 Min Demo
                </motion.button>
              </MagneticWrapper>
            </div>

            {/* Micro Benefits list */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-4 text-xs font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-purple" />
                No Credit Card Required
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-pink" />
                Free Basic Plan
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                Made in India 🇮🇳
              </span>
            </div>
          </motion.div>

          {/* Right Visual Column */}
          <motion.div 
            className="lg:col-span-6 relative flex justify-center items-center h-[420px] sm:h-[500px]"
            style={{ y: yRight }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Realistic Shop Illustration */}
            <div className="relative w-full max-w-[440px] aspect-[4/3] rounded-[2rem] bg-gradient-brand p-[3px] shadow-premium group overflow-visible">
              <div className="w-full h-full rounded-[1.85rem] overflow-hidden relative bg-white">
                <img 
                  src="/assets/shop-illustration.png" 
                  alt="Suljhaoo Digital Shop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Dynamic Popping Chat Bubbles */}
            {activeMessages.map((msg, idx) => {
              const pos = bubblePositions[idx];
              const styles = getBubbleStyles(msg.color);
              
              return (
                <motion.div
                  key={msg.id}
                  className={`absolute ${pos.className} ${styles.bg} backdrop-blur-md border ${pos.borderRadius} p-3 flex gap-2.5 cursor-pointer z-20 shadow-md`}
                  initial={{ opacity: 0, scale: 0.3, y: pos.yRange[0] }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1, 
                    y: [pos.yRange[0], pos.yRange[1], pos.yRange[2], pos.yRange[3]],
                  }}
                  transition={{
                    y: {
                      duration: pos.duration,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: pos.floatDelay
                    },
                    scale: {
                      type: "spring",
                      stiffness: 280,
                      damping: 14,
                      duration: 0.6
                    },
                    opacity: { duration: 0.3 }
                  }}
                  whileHover={{ scale: 1.05, zIndex: 30 }}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 ${styles.avatarBg}`}>
                    {msg.initials}
                  </div>
                  <div className="text-left leading-tight flex-1">
                    <div className="flex justify-between items-center mb-0.5">
                      <span className={`font-bold text-[11px] ${msg.color === 'green' ? 'text-green-950' : 'text-gray-900'}`}>
                        {msg.sender}
                      </span>
                      <span className={`text-[8px] font-bold ${msg.color === 'green' ? 'text-green-700' : 'text-gray-400'}`}>
                        {msg.type === 'whatsapp' ? 'WhatsApp' : '10:15 AM'}
                      </span>
                    </div>
                    <p className={`text-[10px] leading-normal font-medium ${msg.color === 'green' ? 'text-gray-800' : 'text-gray-600'}`}>
                      {msg.text}
                    </p>
                    <span className={`text-[8px] font-bold block mt-0.5 ${styles.metaText}`}>
                      {msg.meta}
                    </span>
                  </div>
                </motion.div>
              );
            })}

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
