import React from 'react';
import { HERO_ASSETS, COMPETITIONS } from '../data/yecData';
import { Competition } from '../types';
import { Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutAndScheduleProps {
  onSelectCompetition: (comp: Competition) => void;
}

export const AboutAndSchedule: React.FC<AboutAndScheduleProps> = ({ onSelectCompetition }) => {
  const week1Comps = COMPETITIONS.filter((c) => c.week === 1);
  const week2Comps = COMPETITIONS.filter((c) => c.week === 2);
  const week3Comps = COMPETITIONS.filter((c) => c.week === 3);

  return (
    <section id="about-yec" className="relative bg-[#f6f7f9] text-[#121620] py-16 px-4 sm:px-6 lg:px-8">
      {/* Decorative top ribbon banner */}
      <div className="max-w-7xl mx-auto mb-12">
        <img
          src={HERO_ASSETS.yecBanner}
          alt="YEC Graphic Banner"
          className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* WHAT IS Y E C ? Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-20">
          {/* Left Column: Heading & Detailed Description */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            {/* Boxed Title with bold border */}
            <div
              id="what-is-yec-box"
              className="border-[6px] sm:border-[10px] border-black bg-[#3b477a]/15 p-6 sm:p-8 rounded-lg mb-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
            >
              <h2 className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-black leading-none">
                WHAT IS <span className="text-[#ff9900]">Y</span> <span className="text-[#39ae8a]">E</span> <span className="text-[#e31837]">C</span> ?
              </h2>
            </div>

            {/* Content paragraph card with mint/sage tint and bold border */}
            <div
              id="what-is-yec-description-box"
              className="border-[4px] sm:border-[6px] border-black bg-[#a7e4d2]/75 p-6 sm:p-8 rounded-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] flex-1 flex flex-col justify-center"
            >
              <p className="font-body text-base sm:text-lg leading-relaxed text-zinc-900 font-medium">
                First established in 2008, the <strong>York Engineering Competition (YEC)</strong> is one of the largest and most important events led by the <strong>Lassonde Engineering Society</strong>. Offered annually to all our <strong>4.7k students</strong>, we strive to challenge our participants to push the boundaries of Engineering by showcasing their creativity and critical thinking in one of our nine competitions.
              </p>
              <p className="font-body text-base sm:text-lg leading-relaxed text-zinc-900 font-medium mt-4">
                Winners of the YEC qualify for the <strong>Ontario Engineering Competition (OEC)</strong> to represent York Engineering at a provincial level. Students who win OEC can then qualify for the <strong>Canadian Engineering Competition (CEC)</strong>. This competition challenges students to practice and develop practical engineering skills, while gaining valuable feedback and learning from industry professionals and professors.
              </p>

              {/* Pathway Pills */}
              <div className="flex flex-wrap items-center gap-3 mt-6 pt-4 border-t border-black/20">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5 text-[#ff9900]" />
                  YEC 2026
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#39ae8a] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  OEC Ontario
                </span>
                <span className="text-sm font-bold text-black">➔</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e31837] text-white text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  CEC Canada
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Event Photo */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="w-full h-full min-h-[300px] rounded-lg border-[4px] sm:border-[6px] border-black overflow-hidden shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-white">
              <img
                id="yec-action-photo"
                src={HERO_ASSETS.aboutPhoto}
                alt="Students collaborating at York Engineering Competition"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* SCHEDULE SECTION */}
        <div id="schedule-section" className="pt-10 mb-16">
          {/* Schedule Title Banner with Robot Mascot */}
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6 border-[6px] sm:border-[10px] border-black bg-[#ff9900]/15 p-6 sm:p-8 rounded-lg mb-14 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
            <div>
              <h2
                id="schedule-main-heading"
                className="font-display text-4xl sm:text-6xl md:text-7xl uppercase tracking-wider text-black leading-none"
              >
                <span className="text-[#ff9900]">Y</span> <span className="text-[#39ae8a]">E</span> <span className="text-[#e31837]">C</span> 2026-27 SCHEDULE
              </h2>
              <p className="font-body text-zinc-700 text-sm sm:text-base mt-2 font-medium">
                Explore all 9 competition categories across three intense weekends of engineering innovation.
              </p>
            </div>

            <img
              src={HERO_ASSETS.robotMascot}
              alt="YEC Mascot Robot"
              className="w-24 sm:w-32 h-auto object-contain shrink-0 drop-shadow-md animate-bounce"
              style={{ animationDuration: '3s' }}
              referrerPolicy="no-referrer"
            />
          </div>

          {/* WEEK 1 */}
          <div id="week-1-container" className="mb-16">
            <div className="border-[4px] sm:border-[6px] border-black bg-[#ff9900] text-black px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8">
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                WEEK 1
              </h3>
              <span className="font-body font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full">
                SEPTEMBER 26TH - SEPTEMBER 27TH, 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {week1Comps.map((comp) => (
                <div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  onClick={() => onSelectCompetition(comp)}
                  className="group cursor-pointer border-[4px] border-black bg-white rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                >
                  <div className="h-52 bg-zinc-100 overflow-hidden border-b-[3px] border-black relative">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {comp.teamSize}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-3xl uppercase tracking-wide text-black mb-2 group-hover:text-[#ff9900] transition-colors">
                        {comp.name}
                      </h4>
                      <p className="font-body text-zinc-700 text-sm leading-relaxed line-clamp-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-black">
                      <span className="text-[#ff9900] font-bold">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WEEK 2 */}
          <div id="week-2-container" className="mb-16">
            <div className="border-[4px] sm:border-[6px] border-black bg-[#39ae8a] text-white px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8">
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                WEEK 2
              </h3>
              <span className="font-body font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full">
                OCTOBER 3RD - OCTOBER 4TH, 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {week2Comps.map((comp) => (
                <div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  onClick={() => onSelectCompetition(comp)}
                  className="group cursor-pointer border-[4px] border-black bg-white rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                >
                  <div className="h-52 bg-zinc-100 overflow-hidden border-b-[3px] border-black relative">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {comp.teamSize}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-3xl uppercase tracking-wide text-black mb-2 group-hover:text-[#39ae8a] transition-colors">
                        {comp.name}
                      </h4>
                      <p className="font-body text-zinc-700 text-sm leading-relaxed line-clamp-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-black">
                      <span className="text-[#39ae8a] font-bold">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* WEEK 3 */}
          <div id="week-3-container" className="mb-8">
            <div className="border-[4px] sm:border-[6px] border-black bg-[#e31837] text-white px-6 py-4 rounded-lg shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] flex flex-wrap items-center justify-between gap-2 mb-8">
              <h3 className="font-display text-3xl sm:text-4xl uppercase tracking-wider font-bold">
                WEEK 3
              </h3>
              <span className="font-body font-bold text-sm sm:text-base tracking-widest uppercase bg-black text-white px-4 py-1.5 rounded-full">
                OCTOBER 10TH - OCTOBER 11TH, 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {week3Comps.map((comp) => (
                <div
                  key={comp.id}
                  id={`comp-card-${comp.id}`}
                  onClick={() => onSelectCompetition(comp)}
                  className="group cursor-pointer border-[4px] border-black bg-white rounded-lg overflow-hidden shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0px_0px_rgba(0,0,0,1)] flex flex-col"
                >
                  <div className="h-52 bg-zinc-100 overflow-hidden border-b-[3px] border-black relative">
                    <img
                      src={comp.image}
                      alt={comp.name}
                      className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-2 right-2 bg-black text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {comp.teamSize}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display text-3xl uppercase tracking-wide text-black mb-2 group-hover:text-[#e31837] transition-colors">
                        {comp.name}
                      </h4>
                      <p className="font-body text-zinc-700 text-sm leading-relaxed line-clamp-4">
                        {comp.description}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-zinc-200 flex items-center justify-between text-xs font-semibold text-black">
                      <span className="text-[#e31837] font-bold">Click to view details</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Decorative bottom ribbon banner */}
        <div className="mt-14">
          <img
            src={HERO_ASSETS.yecBanner}
            alt="YEC Graphic Banner"
            className="w-full h-auto max-h-16 object-cover rounded-md shadow-sm border border-zinc-200"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </section>
  );
};
