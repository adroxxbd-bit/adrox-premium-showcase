import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : ''}`}>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
            Designs That{' '}
            <span className="text-primary font-serif">Speak Louder</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up-delayed' : ''}`}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Transforming ideas into powerful visuals that captivate, inspire, and drive results for forward-thinking brands.
          </p>
          
          <Button 
            size="default"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-full transition-smooth btn-glow"
          >
            About us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;