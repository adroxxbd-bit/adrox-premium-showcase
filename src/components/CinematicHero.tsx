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
          <Button 
            size="lg" 
            className="hero-button"
            onClick={() => {
              const element = document.getElementById('services-section');
              if (element) {
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 100;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 2000; // 2 seconds
                let startTime: number | null = null;

                // Easing function for smooth start and stop
                const easeInOutCubic = (t: number): number => {
                  return t < 0.5 
                    ? 4 * t * t * t 
                    : 1 - Math.pow(-2 * t + 2, 3) / 2;
                };

                const animation = (currentTime: number) => {
                  if (startTime === null) startTime = currentTime;
                  const timeElapsed = currentTime - startTime;
                  const progress = Math.min(timeElapsed / duration, 1);
                  const ease = easeInOutCubic(progress);
                  
                  window.scrollTo(0, startPosition + distance * ease);
                  
                  if (progress < 1) {
                    requestAnimationFrame(animation);
                  }
                };

                requestAnimationFrame(animation);
              }
            }}
          >
            Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CinematicHero;