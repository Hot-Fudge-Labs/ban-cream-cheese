import { Navigation } from "./components/layout/navigation";
import { HeroSection } from "./components/sections/hero-section";
import { EvidenceSection } from "./components/sections/evidence-section";
import { ChefTestimony } from "./components/sections/chef-testimony";
import { FooterSection } from "./components/sections/footer-section";

/**
 * Main page component for the Sushi Truth website.
 * A neo-brutalist styled site exposing the cream cheese conspiracy in sushi.
 */
export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        
        <div id="evidence">
          <EvidenceSection />
        </div>
        
        <div id="testimony">
          <ChefTestimony />
        </div>
        
        <div id="action">
          <FooterSection />
        </div>
      </main>
    </div>
  );
}