import { useEffect, useRef, useState } from 'react';

const CinematicWhoWeAre = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  
  const fullText = "We are a creative design agency dedicated to helping brands look unique and professional. From branding and identity to graphic design and social media content, we bring ideas to life with designs that connect, inspire, and grow your business.";

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
    if (isVisible) {
      const words = fullText.split(' ');
      let currentIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (currentIndex <= words.length) {
          setTypewriterText(words.slice(0, currentIndex).join(' '));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
        }
      }, 120);

      return () => clearInterval(typeInterval);
    }
  }, [isVisible, fullText]);

  return (
    <section ref={sectionRef} className="cinematic-who-we-are">
      {/* Background light flare */}
      <div className="background-light-sweep" />
      
      <div className="who-we-are-content">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
            <span className="title-text">Who We Are?</span>
            <div className="title-underline">
              <div className="underline-fill" />
              <div className="underline-glow" />
            </div>
          </h2>
        </div>
        
        <div className={`text-container ${isVisible ? 'animate' : ''}`}>
          <p className="typewriter-paragraph">
            {typewriterText}
            <span className="typing-cursor" />
          </p>
        </div>
      </div>

      {/* Floating accent elements */}
      <div className="accent-shapes">
        <div className="accent-shape accent-shape-1" />
        <div className="accent-shape accent-shape-2" />
      </div>

      {/* Section divider */}
      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
};

export default CinematicWhoWeAre;