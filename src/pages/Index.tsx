import HeroSection from '@/components/HeroSection';
import WhoWeAreSection from '@/components/WhoWeAreSection';
import ServicesSection from '@/components/ServicesSection';
import FooterSection from '@/components/FooterSection';
import ParallaxBackground from '@/components/ParallaxBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <ParallaxBackground />
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
