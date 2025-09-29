import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const CinematicHero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax transforms
  const parallaxY = scrollY * 0.3;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const ripple = document.createElement('div');
    ripple.className = 'button-ripple';
    
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    
    button.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  };

  return (
    <section ref={heroRef} className="cinematic-hero">
      {/* Multi-layer Parallax Background */}
      <div className="hero-bg-layer hero-bg-far" style={{ transform: `translateY(${parallaxY * 0.2}px)` }} />
      <div className="hero-bg-layer hero-bg-mid" style={{ transform: `translateY(${parallaxY * 0.5}px)` }} />
      <div className="hero-bg-layer hero-bg-near" style={{ transform: `translateY(${parallaxY * 0.8}px)` }} />
      
      {/* Mouse-following shapes */}
      <div 
        className="mouse-follower mouse-follower-1"
        style={{
          transform: `translate(${mouseParallaxX * 2}px, ${mouseParallaxY * 2}px)`
        }}
      />
      <div 
        className="mouse-follower mouse-follower-2"
        style={{
          transform: `translate(${mouseParallaxX * -1.5}px, ${mouseParallaxY * -1.5}px)`
        }}
      />

      <div className="hero-content">
        <div className={`hero-headline ${isLoaded ? 'animate' : ''}`}>
          <h1 className="staggered-letters">
            {'Designs That '.split('').map((char, i) => (
              <span 
                key={i} 
                className="letter"
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
            <span className="text-primary">
              {'Speak Louder'.split('').map((char, i) => (
                <span 
                  key={i + 100} 
                  className="letter accent-letter"
                  style={{ animationDelay: `${(i + 13) * 50}ms` }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </span>
          </h1>
        </div>
        
        <div className={`hero-subtext ${isLoaded ? 'animate' : ''}`}>
          <p className="typewriter-text">
            Transforming ideas into powerful visuals that captivate, inspire, and drive results for forward-thinking brands.
          </p>
        </div>
        
        <div className={`hero-button-container ${isLoaded ? 'animate' : ''}`}>
          <Button 
            ref={buttonRef}
            size="default"
            className="cinematic-hero-button breathing-button"
            onClick={handleButtonClick}
          >
            <span>About us</span>
            <div className="button-glow" />
            <div className="button-wave" />
          </Button>
        </div>
      </div>

      {/* Light flare effect */}
      <div className="hero-light-flare" />
      
      {/* Section divider */}
      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
};

export default CinematicHero;