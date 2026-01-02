import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServiceAreaSection } from "@/components/ServiceAreaSection";
import { TabbedContentSection } from "@/components/TabbedContentSection";
import { FAQSection } from "@/components/FAQSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />
      <main>
        <HeroSection />
        <div className="bg-secondary/30">
          <SectionDivider variant="wave" className="text-secondary/30" />
        </div>
        <AboutSection />
        <div className="bg-background">
          <SectionDivider variant="curve" flip className="text-secondary/30" />
        </div>
        <TabbedContentSection />
        <div className="bg-secondary/30">
          <SectionDivider variant="wave" className="text-secondary/30" />
        </div>
        <ServiceAreaSection />
        <div className="bg-background">
          <SectionDivider variant="curve" flip className="text-secondary/30" />
        </div>
        <FAQSection />
        <div className="bg-accent/30">
          <SectionDivider variant="wave" className="text-accent/30" />
        </div>
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
