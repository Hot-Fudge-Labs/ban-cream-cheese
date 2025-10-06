import { SectionContainer, RotatedCard } from '@/app/components/ui';

/**
 * Footer section with mission statement, contact information, and resources.
 * Features a neo-brutalist design with rotated cards and bold typography.
 */
export function FooterSection() {
  return (
    <SectionContainer as="footer" className="bg-black text-white py-16 border-t-8 border-red-500">
      {/* Main Footer Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        {/* Mission */}
        <RotatedCard variant="red" rotation="rotate-1">
          <h3 className="text-2xl font-black uppercase mb-4">MISSION</h3>
          <p className="uppercase tracking-wide">
            EXPOSE THE CREAM CHEESE CONSPIRACY AND RESTORE SUSHI TO ITS RIGHTFUL GLORY
          </p>
        </RotatedCard>

        {/* Contact */}
        <RotatedCard variant="light" borderColor="red" rotation="-rotate-1">
          <h3 className="text-2xl font-black uppercase mb-4">CONTACT</h3>
          <div className="space-y-2 uppercase tracking-wide">
            <p>TRUTH@REALUSUSHI.COM</p>
            <p>@NOCREAMCHEESE</p>
            <p>#AUTHENTICITYMATTERS</p>
          </div>
        </RotatedCard>

        {/* Resources */}
        <RotatedCard variant="dark" rotation="rotate-2">
          <h3 className="text-2xl font-black uppercase mb-4">RESOURCES</h3>
          <ul className="space-y-2 uppercase tracking-wide">
            <li>• FIND REAL SUSHI SPOTS</li>
            <li>• LEARN TRADITIONAL METHODS</li>
            <li>• REPORT CREAM CHEESE CRIMES</li>
            <li>• JOIN THE RESISTANCE</li>
          </ul>
        </RotatedCard>
      </div>

      {/* Disclaimer */}
      <div className="text-center">
        <RotatedCard variant="light" borderColor="red" className="inline-block p-8">
          <p className="text-lg uppercase tracking-wide max-w-4xl">
            ⚠️ WARNING: THIS SITE CONTAINS GRAPHIC CONTENT ABOUT THE DESTRUCTION OF CULINARY TRADITIONS. 
            VIEWER DISCRETION ADVISED. ⚠️
          </p>
        </RotatedCard>
      </div>

      {/* Copyright */}
      <div className="mt-12 text-center border-t-4 border-red-500 pt-8">
        <p className="text-lg uppercase tracking-widest">
          © 2025 THE SUSHI TRUTH PROJECT • NO CREAM CHEESE ALLOWED
        </p>
      </div>
    </SectionContainer>
  );
}
