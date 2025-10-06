import { Navigation } from "./components/layout/navigation";
import { HeroSection } from "./components/sections/hero-section";
import { EvidenceSection } from "./components/sections/evidence-section";
import { ChefTestimony } from "./components/sections/chef-testimony";
import { FooterSection } from "./components/sections/footer-section";
import { SECTION_IDS } from "./lib/constants";

/**
 * Main page component for the Sushi Truth website.
 * A neo-brutalist styled site exposing the cream cheese conspiracy in sushi.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main id="main-content" role="main">
        <HeroSection />
        
        <section id={SECTION_IDS.EVIDENCE}>
          <EvidenceSection />
        </section>
        
        <section id={SECTION_IDS.TESTIMONY}>
          <ChefTestimony />
        </section>
        
        <section id={SECTION_IDS.ACTION}>
          <FooterSection />
        </section>
      </main>
    </div>
  );
}