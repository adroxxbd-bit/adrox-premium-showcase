import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const CinematicFooter = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <footer ref={sectionRef} className="footer-section">
      <div className="footer-content">
        <h3 className={`footer-brand ${isVisible ? 'animate' : ''}`}>ADROX</h3>
        
        <h4 className={`footer-headline ${isVisible ? 'animate' : ''}`}>
          Ready to bring your ideas to life? Let's design <span className="text-primary">something amazing together</span>.
        </h4>
        
        <div className={`footer-button-wrapper ${isVisible ? 'animate' : ''}`}>
          <Button size="lg" className="footer-button">
            Let's Talk
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default CinematicFooter;