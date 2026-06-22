import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/testimonials';
import SectionHeading from '../components/ui/SectionHeading';
import ParallaxOrb from '../components/ui/ParallaxOrb';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const Testimonials: React.FC = () => {

  const customerStories = testimonials;



  return (
    <section className="py-24 bg-transparent relative overflow-hidden" id="testimonials">
      {/* Background Parallax Orbs */}
      <ParallaxOrb 
        className="top-1/4 left-0 w-[400px] h-[400px] bg-brand-purple/5 blur-[140px]" 
        speed={80} 
      />
      <ParallaxOrb 
        className="bottom-1/4 right-0 w-[400px] h-[400px] bg-brand-pink/5 blur-[140px]" 
        speed={-120} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <SectionHeading
          badge={{ label: 'Shopkeeper Success Stories' }}
          title={<>Hear From Our <span className="text-gradient">Happy Shopkeepers</span></>}
          subtitle="Real stories from local retail owners, wholesalers, and boutique managers scaling with Suljhaoo."
        />

        {/* Swiper Slider */}
        <div className="max-w-4xl mx-auto px-4 relative">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2 },
            }}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            className="pb-12"
          >
            {customerStories.map((story, idx) => (
              <SwiperSlide key={idx} className="h-auto">
                <div className="bg-white rounded-3xl p-8 border border-brand-purple/10 shadow-sm hover:shadow-premium hover:border-brand-purple/20 transition-all duration-300 flex flex-col justify-between h-full relative text-left">
                  
                  {/* Quote Icon Background */}
                  <Quote size={80} className="absolute right-6 top-6 text-brand-purple/5 pointer-events-none stroke-[1px]" />
                  
                  <div>
                    {/* Stars */}
                    <div className="flex gap-1 mb-5">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} size={15} className="fill-amber-400 stroke-amber-400" />
                      ))}
                    </div>

                    {/* Review text */}
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed italic mb-8 relative z-10">
                      "{story.quote}"
                    </p>
                  </div>

                  {/* Profile info */}
                  <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-5">
                    <div className="w-11 h-11 rounded-xl bg-gradient-brand text-white font-extrabold text-sm flex items-center justify-center shrink-0 shadow-md shadow-brand-purple/10">
                      {story.initials}
                    </div>
                    <div className="leading-tight">
                      <h4 className="font-heading font-bold text-gray-900 text-sm">{story.name}</h4>
                      <span className="text-xs text-gray-400 font-semibold">{story.store}</span>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
