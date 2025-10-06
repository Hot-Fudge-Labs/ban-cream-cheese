'use client';

import { scrollToSection } from '@/app/lib/utils';
import { SECTION_IDS } from '@/app/lib/constants';

/**
 * Main navigation bar with fixed positioning and links to key sections.
 * Features a neo-brutalist design with bold borders and uppercase text.
 */
export function Navigation() {

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b-4 border-red-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black uppercase tracking-wide">
            SUSHI TRUTH
          </div>
          <nav className="hidden md:flex" aria-label="Main navigation">
            <ul className="flex space-x-8 uppercase tracking-wide">
              <li>
                <button
                  onClick={() => scrollToSection(SECTION_IDS.EVIDENCE)}
                  className="hover:text-red-500 transition-colors"
                  aria-label="Navigate to evidence section"
                >
                  EVIDENCE
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(SECTION_IDS.TESTIMONY)}
                  className="hover:text-red-500 transition-colors"
                  aria-label="Navigate to testimony section"
                >
                  TESTIMONY
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection(SECTION_IDS.ACTION)}
                  className="hover:text-red-500 transition-colors"
                  aria-label="Navigate to take action section"
                >
                  TAKE ACTION
                </button>
              </li>
            </ul>
          </nav>
          <button 
            className="bg-red-500 hover:bg-red-600 px-6 py-2 border-2 border-white uppercase tracking-wide transition-colors"
            aria-label="Join the resistance"
          >
            RESIST
          </button>
        </div>
      </div>
    </nav>
  );
}
