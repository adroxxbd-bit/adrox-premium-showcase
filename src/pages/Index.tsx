import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import ServicesSection from '@/components/ServicesSection';
import FooterSection from '@/components/FooterSection';

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
      <FooterSection />
    </div>
  );
};

export default Index;
