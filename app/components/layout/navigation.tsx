'use client';

/**
 * Main navigation bar with fixed positioning and links to key sections.
 * Features a neo-brutalist design with bold borders and uppercase text.
 */
export function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black text-white border-b-4 border-red-500">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-black uppercase tracking-wide">
            SUSHI TRUTH
          </div>
          <div className="hidden md:flex space-x-8 uppercase tracking-wide">
            <button
              onClick={() => scrollToSection('evidence')}
              className="hover:text-red-500 transition-colors"
              aria-label="Navigate to evidence section"
            >
              EVIDENCE
            </button>
            <button
              onClick={() => scrollToSection('testimony')}
              className="hover:text-red-500 transition-colors"
              aria-label="Navigate to testimony section"
            >
              TESTIMONY
            </button>
            <button
              onClick={() => scrollToSection('action')}
              className="hover:text-red-500 transition-colors"
              aria-label="Navigate to take action section"
            >
              TAKE ACTION
            </button>
          </div>
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
