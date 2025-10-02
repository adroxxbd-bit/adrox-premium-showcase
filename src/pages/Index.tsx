import CinematicHero from '@/components/CinematicHero';
import CinematicWhoWeAre from '@/components/CinematicWhoWeAre';
import CinematicServices from '@/components/CinematicServices';
import CinematicFooter from '@/components/CinematicFooter';
import CinematicEffects from '@/components/CinematicEffects';
import CustomCursor from '@/components/CustomCursor';

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <CustomCursor />
      <CinematicEffects />
      
      {/* Hero Section */}
      <CinematicHero />
      
      {/* Who We Are Section */}
      <CinematicWhoWeAre />
      
      {/* Services Section */}
      <CinematicServices />
      
      {/* Footer */}
      <CinematicFooter />
    </div>
  );
};

export default Index;
