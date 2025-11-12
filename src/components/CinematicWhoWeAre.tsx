import { useEffect, useRef, useState } from 'react';

const CinematicWhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const text = "We are a creative design agency dedicated to helping brands look unique and professional. From branding and identity to graphic design and social media content, we bring ideas to life with designs that connect, inspire, and grow your business.";
  const words = text.split(' ');

  return (
    <section ref={sectionRef} className="who-we-are-section" style={{
      transform: `translateY(${(1 - scrollY) * 30}px)`,
      transition: 'transform 0.1s ease-out'
    }}>
      <div className="who-we-are-content">
        <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
          Who We Are?
        </h2>
        
        <p className={`section-text ${isVisible ? 'animate' : ''}`}>
          {words.map((word, index) => (
            <span
              key={index}
              style={{
                display: 'inline-block',
                marginRight: '0.3em',
                opacity: isVisible ? 1 : 0,
                animation: isVisible ? `wordReveal 0.5s ease-out ${index * 0.03}s forwards` : 'none',
              }}
            >
              {word}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};

export default CinematicWhoWeAre;