import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import ServicesSection from '@/components/ServicesSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Who We Are Section */}
      <WhoWeAreSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border/50">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-serif font-bold text-primary mb-2">ADROX</h3>
          <p className="text-muted-foreground font-sans">
            Designs that speak louder
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
