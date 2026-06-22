import React from 'react';
import { motion } from 'framer-motion';
import { features } from '../data/features';
import SectionHeading from '../components/ui/SectionHeading';


const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 18,
    },
  },
};

export const FeaturesGrid: React.FC = () => {

  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="features">
      {/* Background Soft Orbs */}
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-green-400/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[350px] h-[350px] bg-orange-400/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge={{ label: 'Powerful Core Features', color: 'green' }}
          title={<>Everything You Need to <span className="text-gradient">Suljhao</span> Your Business</>}
          subtitle="Ditch paper registers and expensive complex software. Suljhaoo has all the tools to digitize your local shop in minutes."
        />

        {/* Feature Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              className="group bg-white rounded-3xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-xl transition-all duration-300 relative text-left overflow-hidden flex flex-col"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              {/* Illustration Container */}
              <div className="w-full h-56 p-6 flex items-center justify-center border-b border-gray-100">
                <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                  {item.illustration}
                </div>
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <h3 className="font-heading font-bold text-lg sm:text-xl text-gray-900 group-hover:text-green-600 transition-colors duration-200">
                  {item.title}
                </h3>
                
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesGrid;
