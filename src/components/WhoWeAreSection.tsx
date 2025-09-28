import { useEffect, useRef, useState } from 'react';

const WhoWeAreSection = () => {
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
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-foreground mb-8 heading-underline ${isVisible ? 'animate-underline' : ''}`}>
            Who We Are?
          </h2>
        </div>
        
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'fade-in-up' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-center font-sans">
            We are a creative design agency dedicated to helping brands look unique and professional. 
            From branding and identity to graphic design and social media content, we bring ideas to life 
            with designs that connect, inspire, and grow your business.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAreSection;