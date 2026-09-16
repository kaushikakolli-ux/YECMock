import React from 'react';
import { HERO_ASSETS, TICKET_LINKS } from '../data/yecData';
import { Ticket, ExternalLink, Calendar, MapPin } from 'lucide-react';

interface HeroSectionProps {
  onOpenTicketInfo: (week: number) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenTicketInfo }) => {
  return (
    <section
      id="page-top"
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#090b10]"
    >
      {/* Background Image with Dark Vignette and Film Texture */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_ASSETS.bgImage}
          alt="York Engineering Competition background"
          className="w-full h-full object-cover object-center opacity-30 select-none scale-105 transform"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090b10]/80 via-[#090b10]/60 to-[#090b10]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#090b10]/50 to-[#090b10]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* YEC 2026 Logo */}
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <img
            id="hero-yec-logo"
            src={HERO_ASSETS.logo}
            alt="York Engineering Competition Logo"
            className="w-48 sm:w-64 md:w-80 h-auto object-contain mx-auto drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Big stylized title: Y ork E ngineering C ompetition */}
        <h1
          id="hero-main-title"
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase tracking-wider text-white leading-none mb-6 drop-shadow-md"
        >
          <span className="text-[#ff9900]">Y</span><span className="tracking-widest">ork</span>{' '}
          <span className="text-[#39ae8a]">E</span><span className="tracking-widest">ngineering</span>{' '}
          <span className="text-[#e31837]">C</span><span className="tracking-widest">ompetition</span>
        </h1>

        {/* Sub-headline: 2026 TICKETS ARE available! */}
        <div className="relative inline-block mb-10">
          <h2
            id="hero-ticket-availability-heading"
            className="font-display text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-wider"
          >
            2026 TICKETS ARE available!
          </h2>
          <div className="h-1.5 w-full bg-gradient-to-r from-[#ff9900] via-[#39ae8a] to-[#e31837] rounded-full mt-2" />
        </div>

        {/* Meta badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-zinc-300 mb-10">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Calendar className="w-4 h-4 text-[#ff9900]" />
            <span>Sept 26 - Oct 11, 2026</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <MapPin className="w-4 h-4 text-[#e31837]" />
            <span>Bergeron Centre for Engineering Excellence</span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <Ticket className="w-4 h-4 text-[#39ae8a]" />
            <span>OEC & CEC Qualifier</span>
          </div>
        </div>

        {/* Ticket Action Buttons: WEEK 2 and WEEK 3 */}
        <div
          id="hero-ticket-buttons-container"
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-md"
        >
          <div className="flex flex-col items-center w-full sm:w-auto">
            <a
              id="hero-week2-ticket-btn"
              href={TICKET_LINKS.week2}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-48 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold font-sans text-base tracking-wider hover:bg-[#39ae8a] hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-[#39ae8a]/20 flex items-center justify-center gap-2"
            >
              <span>WEEK 2</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenTicketInfo(2)}
              className="text-[11px] text-zinc-400 hover:text-white mt-1.5 underline underline-offset-4"
            >
              View Week 2 Competitions
            </button>
          </div>

          <div className="flex flex-col items-center w-full sm:w-auto">
            <a
              id="hero-week3-ticket-btn"
              href={TICKET_LINKS.week3}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-48 px-8 py-3.5 rounded-full bg-white text-zinc-950 font-bold font-sans text-base tracking-wider hover:bg-[#e31837] hover:text-white transition-all duration-200 transform hover:-translate-y-0.5 shadow-lg hover:shadow-[#e31837]/20 flex items-center justify-center gap-2"
            >
              <span>WEEK 3</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenTicketInfo(3)}
              className="text-[11px] text-zinc-400 hover:text-white mt-1.5 underline underline-offset-4"
            >
              View Week 3 Competitions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
