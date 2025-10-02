import { useEffect, useRef, useState } from 'react';

const CinematicWhoWeAre = () => {
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
    <section ref={sectionRef} className="who-we-are-section">
      <div className="who-we-are-content">
        <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
          Who We Are?
        </h2>
        
        <p className={`section-text ${isVisible ? 'animate' : ''}`}>
          We are a creative design agency dedicated to helping brands look unique and professional. From branding and identity to graphic design and social media content, we bring ideas to life with designs that connect, inspire, and grow your business.
        </p>
      </div>
    </section>
  );
};

export default CinematicWhoWeAre;