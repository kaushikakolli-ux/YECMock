import React from 'react';
import { SOCIAL_LINKS, HERO_ASSETS } from '../data/yecData';
import { MessageSquare, ArrowUp, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#0b0e14] text-white border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Address */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={HERO_ASSETS.lesLogo}
                alt="Lassonde Engineering Society Crest"
                className="h-12 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
              <div>
                <h3 className="font-display text-2xl tracking-wider uppercase text-white leading-tight">
                  Lassonde Engineering Society
                </h3>
                <span className="text-xs text-zinc-400 font-sans">
                  York University Student Society
                </span>
              </div>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed mb-4 max-w-md">
              The official representative student body for over 4,700 undergraduate engineering students at the Lassonde School of Engineering, York University.
            </p>

            <div className="flex items-start gap-2.5 text-zinc-300 text-sm mb-2">
              <MapPin className="w-4 h-4 text-[#e31837] shrink-0 mt-0.5" />
              <span>102G Bergeron Center for Engineering Excellence, 11 Arboretum Ln, Toronto, ON M3J 2S5</span>
            </div>

            <div className="flex items-center gap-2.5 text-zinc-300 text-sm">
              <Mail className="w-4 h-4 text-[#ff9900] shrink-0" />
              <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-white transition-colors">
                {SOCIAL_LINKS.email}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xl uppercase tracking-wider text-white mb-4">
              YEC Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a href="#page-top" className="hover:text-white transition-colors">
                  Top / Overview
                </a>
              </li>
              <li>
                <a href="#about-yec" className="hover:text-white transition-colors">
                  What is YEC?
                </a>
              </li>
              <li>
                <a href="#schedule-section" className="hover:text-white transition-colors">
                  Competition Schedule
                </a>
              </li>
              <li>
                <a href="#team-section" className="hover:text-white transition-colors">
                  Meet the Team
                </a>
              </li>
              <li>
                <a href="#leads-section" className="hover:text-white transition-colors">
                  Competition Leads
                </a>
              </li>
              <li>
                <a href="#packages-section" className="hover:text-white transition-colors">
                  Sponsorship & Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Social Channels */}
          <div className="lg:col-span-4 flex flex-col">
            <h4 className="font-display text-xl uppercase tracking-wider text-white mb-4">
              Community & Connect
            </h4>
            <p className="text-zinc-400 text-sm mb-4">
              Join the official Lassonde Engineering Society Discord community to receive competition announcements, find teammates, and ask organizers questions.
            </p>

            <a
              id="footer-discord-button"
              href={SOCIAL_LINKS.discord}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] text-white text-sm font-semibold transition-colors mb-6 shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Join Discord Community</span>
            </a>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <a
                id="footer-social-instagram"
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#E1306C] hover:text-white text-zinc-300 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                id="footer-social-twitter"
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#1DA1F2] hover:text-white text-zinc-300 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a
                id="footer-social-facebook"
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4267B2] hover:text-white text-zinc-300 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.82 5H18V0h-3.806C10.596 0 9 1.582 9 4.615V8z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                id="footer-social-linkedin"
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#0A66C2] hover:text-white text-zinc-300 flex items-center justify-center transition-all duration-200"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Lassonde Engineering Society. All rights reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
