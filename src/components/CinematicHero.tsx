import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const CinematicHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className={`hero-title ${isLoaded ? 'animate' : ''}`}>
          Designs That <span className="text-primary">Speak Louder</span>
        </h1>
        
        <p className={`hero-subtitle ${isLoaded ? 'animate' : ''}`}>
          Transforming ideas into powerful visuals that captivate, inspire, and drive results for forward-thinking brands.
        </p>
        
        <div className={`hero-button-wrapper ${isLoaded ? 'animate' : ''}`}>
          <Button size="lg" className="hero-button">
            About us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;