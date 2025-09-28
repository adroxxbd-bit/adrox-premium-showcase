import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';

const FooterSection = () => {
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
    <footer ref={sectionRef} className="py-16 px-6 border-t border-border/50">
      <div className="max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-serif font-bold text-primary mb-8">ADROX</h3>
        
        <h4 className={`text-2xl md:text-3xl font-serif font-medium text-[#222] mb-8 max-w-3xl mx-auto leading-relaxed tracking-wide footer-headline ${isVisible ? 'animate' : ''}`}>
          Ready to bring your ideas to life? Let's design{' '}
          <span className="footer-accent">something amazing together</span>.
        </h4>
        
        <Button 
          size="default"
          className={`bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-base font-medium rounded-full transition-all duration-300 footer-button ${isVisible ? 'animate' : ''}`}
        >
          Let's Talk
        </Button>
      </div>
    </footer>
  );
};

export default FooterSection;