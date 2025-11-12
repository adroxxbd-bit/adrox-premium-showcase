import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const CinematicFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollProgress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
        setScrollY(scrollProgress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer ref={sectionRef} className="footer-section" style={{
      transform: `translateY(${(1 - scrollY) * 30}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
      <div className="footer-content">
        <h3 className={`footer-brand ${isVisible ? 'animate' : ''}`}>ADROX</h3>
        
        <h4 className={`footer-headline ${isVisible ? 'animate' : ''}`}>
          Ready to bring your ideas to life? Let's design <span className="text-primary">something amazing together</span>.
        </h4>
        
        <div className={`footer-button-wrapper ${isVisible ? 'animate' : ''}`}>
          <Button 
            size="lg" 
            className={`footer-button ${isClicked ? 'button-click-animation' : ''}`}
            onClick={() => {
              setIsClicked(true);
              setTimeout(() => setIsClicked(false), 300);
              window.open('https://wa.me/8801886327955', '_blank');
            }}
          >
            Let's Talk
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default CinematicFooter;