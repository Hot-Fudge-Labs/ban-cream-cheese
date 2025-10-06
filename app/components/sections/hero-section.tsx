import { StatCard, RotatedCard, CTAButton } from '@/app/components/ui';

/**
 * Hero section component with dramatic headline, stats grid, and call-to-action.
 * Features a neo-brutalist design with bold typography and rotated elements.
 */
export function HeroSection() {
  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-8 h-full">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-white/20"></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          {/* Main Headline */}
          <div className="mb-16">
            <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tight leading-none mb-8">
              CREAM CHEESE
              <br />
              <span className="text-red-500 block">KILLED</span>
              <span className="text-white block">SUSHI</span>
            </h1>
            <RotatedCard variant="red" rotation="-rotate-2" className="max-w-2xl">
              <p className="text-xl uppercase tracking-wide">
                THE SYSTEMATIC DESTRUCTION OF 
                <br />
                JAPANESE CULINARY ARTISTRY
              </p>
            </RotatedCard>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <StatCard
              value="90%"
              label='OF "SUSHI" ROLLS CONTAIN CREAM CHEESE'
              variant="light"
              rotation="rotate-1"
              className="border-red-500"
            />
            <StatCard
              value="0%"
              label="TRADITIONAL VALUE REMAINING"
              variant="red"
              rotation="-rotate-1"
            />
            <StatCard
              value="∞"
              label="YEARS TO UNDO THIS DAMAGE"
              variant="dark"
              rotation="rotate-2"
              className="border-red-500"
            />
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <CTAButton 
              size="lg"
              aria-label="Learn more about the truth"
              className="shadow-[8px_8px_0px_0px_#ffffff]"
            >
              EXPOSE THE TRUTH
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}
