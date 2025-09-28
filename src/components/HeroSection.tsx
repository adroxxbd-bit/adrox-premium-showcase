import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up' : ''}`}>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-foreground mb-6">
            Designs That{' '}
            <span className="text-primary font-serif">Speak Louder</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1000 ${isLoaded ? 'fade-in-up-delayed' : ''}`}>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed font-sans">
            Transforming ideas into powerful visuals that captivate, inspire, and drive results for forward-thinking brands.
          </p>
          
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-lg font-medium rounded-full transition-smooth btn-glow"
          >
            About us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;