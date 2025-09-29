import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const CinematicFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [shimmerActive, setShimmerActive] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Trigger shimmer effect after main animation
          setTimeout(() => setShimmerActive(true), 1500);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    
    // Create shockwave ripple effect
    const shockwave = document.createElement('div');
    shockwave.className = 'shockwave-ripple';
    
    const rect = button.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    shockwave.style.left = centerX + 'px';
    shockwave.style.top = centerY + 'px';
    
    document.body.appendChild(shockwave);
    setTimeout(() => shockwave.remove(), 1500);
  };

  return (
    <footer ref={sectionRef} className="cinematic-footer">
      {/* Background effects */}
      <div className="footer-bg-glow" />
      <div className="footer-light-rays" />
      
      <div className="footer-content">
        <div className="brand-logo">
          <h3 className={`logo-text ${isVisible ? 'animate' : ''}`}>ADROX</h3>
          <div className="logo-underline" />
        </div>
        
        <div className={`footer-headline ${isVisible ? 'animate' : ''}`}>
          <h4 className="headline-text">
            Ready to bring your ideas to life? Let's design{' '}
            <span className={`accent-text ${shimmerActive ? 'shimmer' : ''}`}>
              something amazing together
              <div className="accent-underline">
                <div className="underline-fill" />
                <div className="underline-glow-effect" />
              </div>
              <div className="shimmer-overlay" />
            </span>.
          </h4>
        </div>
        
        <div className={`footer-button-container ${isVisible ? 'animate' : ''}`}>
          <Button 
            ref={buttonRef}
            size="default"
            className="cinematic-footer-button pulsing-glow"
            onClick={handleButtonClick}
          >
            <span>Let's Talk</span>
            <div className="button-gradient-shift" />
            <div className="button-neon-glow" />
            <div className="button-pulse-aura" />
          </Button>
        </div>
      </div>

      {/* Floating decorative elements */}
      <div className="footer-decorations">
        <div className="decoration decoration-1" />
        <div className="decoration decoration-2" />
        <div className="decoration decoration-3" />
      </div>
    </footer>
  );
};

export default CinematicFooter;