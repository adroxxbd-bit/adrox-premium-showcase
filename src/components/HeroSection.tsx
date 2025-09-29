import { useEffect, useState, useRef } from 'react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const floating3DRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
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

  // Calculate parallax and 3D transforms
  const parallaxY = scrollY * 0.5;
  const mouseParallaxX = (mousePosition.x - window.innerWidth / 2) * 0.02;
  const mouseParallaxY = (mousePosition.y - window.innerHeight / 2) * 0.02;

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>

      {/* 3D floating element */}
      <div 
        ref={floating3DRef}
        className="floating-3d-element"
        style={{
          transform: `translate3d(${mouseParallaxX}px, ${mouseParallaxY - parallaxY}px, 0) rotateX(${mouseParallaxY * 0.5}deg) rotateY(${mouseParallaxX * 0.5}deg)`
        }}
      >
        <div className="cube-3d">
          <div className="cube-face front"></div>
          <div className="cube-face back"></div>
          <div className="cube-face right"></div>
          <div className="cube-face left"></div>
          <div className="cube-face top"></div>
          <div className="cube-face bottom"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className={`transition-all duration-1200 ease-out ${isLoaded ? 'cinematic-fade-in' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-4">
            <span className="staggered-text" data-text="Designs That ">Designs That </span>
            <span className="text-primary font-serif staggered-text" data-text="Speak Louder">Speak Louder</span>
          </h1>
        </div>
        
        <div className={`transition-all duration-1200 ease-out ${isLoaded ? 'cinematic-fade-in-delayed' : 'opacity-0 translate-y-12'}`}>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed font-sans">
            Transforming ideas into powerful visuals that captivate, inspire, and drive results for forward-thinking brands.
          </p>
          
          <Button 
            size="default"
            className="cinematic-button bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-full transition-smooth"
          >
            About us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;