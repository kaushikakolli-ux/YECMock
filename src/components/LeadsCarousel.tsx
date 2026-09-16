import React, { useRef } from 'react';
import { COMPETITION_LEADS, HERO_ASSETS } from '../data/yecData';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export const LeadsCarousel: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="leads-section"
      className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cover bg-center text-zinc-900"
      style={{
        backgroundImage: `linear-gradient(rgba(240, 243, 246, 0.88), rgba(240, 243, 246, 0.88)), url("${HERO_ASSETS.leadsBg}")`
      }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Left/Right Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <h2
              id="leads-section-heading"
              className="font-display text-5xl sm:text-6xl md:text-7xl uppercase tracking-wider text-black leading-none"
            >
              Competition leads
            </h2>
            <p className="font-body text-zinc-700 text-base mt-2 font-medium">
              Technical leads coordinating the challenge designs, test benches, and judging rubrics.
            </p>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <button
              id="leads-carousel-prev-btn"
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Previous Competition Leads"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              id="leads-carousel-next-btn"
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border-2 border-black bg-white flex items-center justify-center text-black hover:bg-black hover:text-white transition-colors shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] active:translate-x-0.5 active:translate-y-0.5"
              aria-label="Next Competition Leads"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {COMPETITION_LEADS.map((lead, index) => (
            <div
              key={index}
              id={`lead-card-${index}`}
              className="snap-start shrink-0 w-64 sm:w-72 border-[3px] border-black bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center text-center transition-transform hover:-translate-y-1"
            >
              {/* Profile Image with circular frame */}
              <div className="w-36 h-36 rounded-full overflow-hidden border-[3px] border-black mb-5 shadow-sm bg-zinc-100 relative">
                <img
                  src={lead.image}
                  alt={lead.name}
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Name & Role */}
              <h3 className="font-display text-2xl uppercase tracking-wider text-black mb-1">
                {lead.name}
              </h3>
              <p className="font-body text-sm font-semibold text-zinc-600 uppercase tracking-wide">
                {lead.role || 'Competition Lead'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
