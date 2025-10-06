import { ImageWithFallback, SectionHeader, SectionContainer } from '@/app/components/ui';
import { IMAGE_URLS } from '@/app/lib/constants';

interface ComparisonItemProps {
  icon: React.ReactNode;
  text: string;
}

function ComparisonItem({ icon, text }: ComparisonItemProps) {
  return (
    <li className="flex items-center gap-4">
      {icon}
      <span className="uppercase tracking-wide">{text}</span>
    </li>
  );
}

/**
 * Evidence section showcasing side-by-side comparison of traditional vs cream cheese sushi.
 * Includes visual evidence and a conspiracy theory breakdown.
 */
export function EvidenceSection() {
  return (
    <SectionContainer className="bg-white text-black py-20">
      {/* Section Header */}
      <SectionHeader
        title={<>THE <span className="text-red-500">EVIDENCE</span></>}
        subtitle="SIDE BY SIDE COMPARISON"
      />

          {/* Comparison Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Traditional Sushi */}
            <div className="border-8 border-black p-8">
              <div className="bg-green-500 text-white p-4 mb-6 border-4 border-black">
                <h3 className="text-2xl font-black uppercase">AUTHENTIC</h3>
              </div>
              
              <div className="mb-6">
                <ImageWithFallback 
                  src={IMAGE_URLS.TRADITIONAL_SUSHI}
                  alt="Traditional sushi nigiri"
                  className="w-full h-64 object-cover object-[center_75%] border-4 border-black"
                  width={1080}
                  height={720}
                />
              </div>

              <ul className="space-y-4">
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-green-500 border-2 border-black flex-shrink-0"></div>}
                  text="PURE FISH"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-green-500 border-2 border-black flex-shrink-0"></div>}
                  text="SEASONED RICE"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-green-500 border-2 border-black flex-shrink-0"></div>}
                  text="CENTURIES OF TRADITION"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-green-500 border-2 border-black flex-shrink-0"></div>}
                  text="RESPECT FOR INGREDIENTS"
                />
              </ul>
            </div>

            {/* Cream Cheese Sushi */}
            <div className="border-8 border-red-500 p-8">
              <div className="bg-red-500 text-white p-4 mb-6 border-4 border-black">
                <h3 className="text-2xl font-black uppercase">BASTARDIZED</h3>
              </div>
              
              <div className="mb-6">
                <ImageWithFallback 
                  src={IMAGE_URLS.CREAM_CHEESE_ROLL}
                  alt="Cream cheese sushi roll"
                  className="w-full h-64 object-cover object-[center_55%] border-4 border-black"
                  width={1080}
                  height={720}
                />
              </div>

              <ul className="space-y-4">
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-red-500 border-2 border-black flex-shrink-0"></div>}
                  text="PROCESSED DAIRY"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-red-500 border-2 border-black flex-shrink-0"></div>}
                  text="FLAVOR MASKING"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-red-500 border-2 border-black flex-shrink-0"></div>}
                  text="CULTURAL APPROPRIATION"
                />
                <ComparisonItem
                  icon={<div className="w-4 h-4 bg-red-500 border-2 border-black flex-shrink-0"></div>}
                  text="ARTISTRY DESTROYED"
                />
              </ul>
            </div>
          </div>

          {/* Manifesto */}
          <div className="bg-black text-white p-12 border-8 border-red-500 transform -rotate-1">
            <h3 className="text-3xl font-black uppercase mb-6 text-center">
              THE CREAM CHEESE CONSPIRACY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-4">STEP 1</div>
                <p className="uppercase tracking-wide">
                  INTRODUCE &quot;FUSION&quot; AS INNOVATION
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-4">STEP 2</div>
                <p className="uppercase tracking-wide">
                  NORMALIZE DAIRY IN JAPANESE CUISINE
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-black text-red-500 mb-4">STEP 3</div>
                <p className="uppercase tracking-wide">
                  ERASE CULTURAL AUTHENTICITY
                </p>
              </div>
            </div>
          </div>
    </SectionContainer>
  );
}
