import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TrendingUp } from 'lucide-react';
import { timelineMilestones } from '../data/timeline';
import SectionHeading from '../components/ui/SectionHeading';

gsap.registerPlugin(ScrollTrigger);

export const Journey90Days: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  const milestones = timelineMilestones;

  useGSAP(() => {
    // 1. Scroll-linked progress bar scale
    gsap.fromTo(progressLineRef.current, 
      { scaleY: 0 }, 
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".milestones-container",
          start: "top 65%",
          end: "bottom 65%",
          scrub: true,
        }
      }
    );

    // 2. Milestone card animations
    const cards = gsap.utils.toArray(".milestone-card");
    cards.forEach((card: HTMLElement) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        scale: 0.95,
        duration: 0.6,
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });
    });

  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-transparent relative overflow-hidden" 
      id="journey"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <SectionHeading
          badge={{ label: '90-Day Business Journey', icon: <TrendingUp size={14} className="text-brand-purple" /> }}
          title="Watch Your Business Transform"
          subtitle="Local stores witness rapid efficiency gains, zero billing mistakes, and automated customer credit returns in under 90 days."
        />

        {/* Milestone Timeline Wrapper */}
        <div className="milestones-container relative max-w-4xl mx-auto pl-8 sm:pl-0">
          
          {/* Vertical Timeline Background Line (desktop center, mobile left) */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gray-200 -translate-x-1/2 rounded-full pointer-events-none" />

          {/* GSAP Scroll-Linked Progress Line (gradient fill) */}
          <div 
            ref={progressLineRef}
            className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-1 bg-gradient-brand -translate-x-1/2 rounded-full origin-top pointer-events-none z-10"
            style={{ transform: 'scaleY(0)' }}
          />

          {/* Milestone Items */}
          <div className="space-y-16">
            {milestones.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx} 
                  className={`flex flex-col sm:flex-row items-start sm:items-center relative w-full ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Center Circle Node */}
                  <div className="absolute left-0 sm:left-1/2 top-2 sm:top-1/2 w-8 h-8 rounded-full bg-gradient-brand border-4 border-white shadow-md -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center font-bold text-white text-[10px]" />

                  {/* Left spacer for desktop */}
                  <div className="hidden sm:block w-1/2" />

                  {/* Right Content Card (or Left if isEven) */}
                  <div className="w-full sm:w-1/2 sm:px-8 text-left">
                    <div className="milestone-card bg-white rounded-3xl p-6 sm:p-8 border border-brand-purple/10 shadow-sm hover:shadow-premium transition-all duration-300 relative group">
                      
                      {/* Tag & Time */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-brand-purple bg-brand-purple/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                          {item.time}
                        </span>
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                          {item.tag}
                        </span>
                      </div>

                      {/* Header Title */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-gradient-brand flex items-center justify-center shrink-0 shadow-md">
                          {item.icon}
                        </div>
                        <h4 className="font-heading font-bold text-lg text-gray-900 group-hover:text-brand-purple transition-colors">
                          {item.title}
                        </h4>
                      </div>

                      {/* Description */}
                      <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                        {item.desc}
                      </p>

                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Journey90Days;
