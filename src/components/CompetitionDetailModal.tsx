import React from 'react';
import { Competition } from '../types';
import { TICKET_LINKS } from '../data/yecData';
import { X, Users, Calendar, Award, BookOpen, ExternalLink } from 'lucide-react';

interface CompetitionDetailModalProps {
  competition: Competition | null;
  onClose: () => void;
}

export const CompetitionDetailModal: React.FC<CompetitionDetailModalProps> = ({ competition, onClose }) => {
  if (!competition) return null;

  const ticketLink = competition.week === 2 ? TICKET_LINKS.week2 : TICKET_LINKS.week3;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
      <div
        id="competition-detail-modal"
        className="relative w-full max-w-2xl bg-white text-zinc-900 rounded-xl border-[4px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden max-h-[90vh] flex flex-col"
      >
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b-[3px] border-black bg-zinc-100">
          <div className="flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-white ${
                competition.week === 1
                  ? 'bg-[#ff9900] text-black'
                  : competition.week === 2
                  ? 'bg-[#39ae8a]'
                  : 'bg-[#e31837]'
              }`}
            >
              {competition.weekLabel}
            </span>
            <span className="text-xs font-semibold text-zinc-600">{competition.dates}</span>
          </div>

          <button
            id="close-competition-modal-btn"
            onClick={onClose}
            className="w-8 h-8 rounded-full border-2 border-black flex items-center justify-center hover:bg-black hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <div className="w-36 h-36 shrink-0 rounded-lg border-2 border-black bg-zinc-50 p-2 overflow-hidden flex items-center justify-center">
              <img
                src={competition.image}
                alt={competition.name}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="font-display text-4xl uppercase tracking-wider text-black leading-none mb-2">
                {competition.name}
              </h3>
              <p className="font-body text-zinc-700 text-sm leading-relaxed">
                {competition.description}
              </p>
            </div>
          </div>

          {/* Quick Specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border-2 border-black bg-zinc-50">
              <div className="flex items-center gap-2 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-1">
                <Users className="w-4 h-4 text-black" />
                <span>Team Composition</span>
              </div>
              <p className="font-semibold text-zinc-900 text-sm">{competition.teamSize}</p>
            </div>

            <div className="p-4 rounded-lg border-2 border-black bg-zinc-50">
              <div className="flex items-center gap-2 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-1">
                <BookOpen className="w-4 h-4 text-black" />
                <span>Eligibility</span>
              </div>
              <p className="font-semibold text-zinc-900 text-sm">{competition.eligibleYears}</p>
            </div>
          </div>

          {/* OEC / CEC Pathway */}
          <div className="p-4 rounded-lg border-2 border-black bg-[#ff9900]/15">
            <div className="flex items-center gap-2 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-1">
              <Award className="w-4 h-4 text-[#ff9900]" />
              <span>Provincial & National Advancement</span>
            </div>
            <p className="font-medium text-zinc-800 text-sm">{competition.qualification}</p>
          </div>

          {/* Detailed challenge context */}
          <div className="text-zinc-700 text-sm leading-relaxed">
            <h4 className="font-bold text-zinc-900 uppercase text-xs tracking-wider mb-1">
              Challenge Overview
            </h4>
            <p>{competition.details}</p>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t-[3px] border-black bg-zinc-50 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-full border-2 border-black text-sm font-bold hover:bg-zinc-200 transition-colors"
          >
            Close
          </button>
          {competition.week > 1 && (
            <a
              href={ticketLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full bg-black text-white text-sm font-bold flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-md"
            >
              <span>Get Tickets</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
