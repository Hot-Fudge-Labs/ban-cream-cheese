import { ImageWithFallback, SectionHeader, SectionContainer, StatCard, RotatedCard, CTAButton } from '@/app/components/ui';

const chefUrl = "https://images.unsplash.com/photo-1548285181-3103ce5d3db2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGNoZWYlMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NTg1ODI0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral";

/**
 * Chef testimony section featuring a quote from an anonymous sushi master,
 * along with compelling statistics about the impact of cream cheese on traditional sushi.
 */
export function ChefTestimony() {
  return (
    <SectionContainer className="bg-red-500 text-white py-20">
      {/* Section Header */}
      <SectionHeader
        title={<>CHEF <span className="text-black">TESTIMONY</span></>}
        subtitle="VOICES FROM THE KITCHEN"
        subtitleRotation="-rotate-1"
      />

      {/* Main Testimony */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="order-2 lg:order-1">
          <RotatedCard variant="dark" className="p-8 mb-8">
            <blockquote className="text-2xl mb-6 leading-relaxed">
              &ldquo;CREAM CHEESE IN SUSHI IS LIKE PUTTING KETCHUP ON WAGYU BEEF. 
              IT&apos;S NOT FUSION - IT&apos;S DESTRUCTION.&rdquo;
            </blockquote>
            <div className="border-t-4 border-red-500 pt-4">
              <cite className="text-lg uppercase tracking-wide not-italic">
                — ANONYMOUS SUSHI MASTER
              </cite>
            </div>
          </RotatedCard>

          <RotatedCard variant="light" rotation="rotate-1">
            <p className="uppercase tracking-wide text-lg">
              <strong>FACT:</strong> NO TRADITIONAL SUSHI CONTAINS DAIRY
            </p>
          </RotatedCard>
        </div>

        <div className="order-1 lg:order-2">
          <ImageWithFallback 
            src={chefUrl}
            alt="Traditional sushi chef"
            className="w-full h-96 object-cover border-8 border-white shadow-[16px_16px_0px_0px_#000000]"
            width={1080}
            height={720}
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <StatCard
          value="10+"
          label="YEARS OF TRAINING WASTED"
          rotation="rotate-2"
          variant="dark"
          className="p-6"
        />
        <StatCard
          value="$0"
          label="VALUE OF &quot;PHILADELPHIA ROLL&quot;"
          rotation="-rotate-1"
          variant="light"
          className="p-6"
        />
        <StatCard
          value="∞"
          label="ANCESTORS DISAPPOINTED"
          rotation="rotate-1"
          variant="dark"
          className="p-6"
        />
        <StatCard
          value="100%"
          label="NOT ACTUAL SUSHI"
          rotation="-rotate-2"
          variant="light"
          className="p-6"
        />
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <RotatedCard variant="dark" className="p-12">
          <h3 className="text-4xl font-black uppercase mb-6">
            TAKE A STAND
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            REFUSE TO ACCEPT CREAM CHEESE AS A LEGITIMATE SUSHI INGREDIENT. 
            DEMAND AUTHENTICITY. RESPECT THE CRAFT.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="primary"
              aria-label="Spread the word about authentic sushi"
            >
              SPREAD THE WORD
            </CTAButton>
            <CTAButton
              variant="secondary"
              aria-label="Find real sushi restaurants"
            >
              FIND REAL SUSHI
            </CTAButton>
          </div>
        </RotatedCard>
      </div>
    </SectionContainer>
  );
}
