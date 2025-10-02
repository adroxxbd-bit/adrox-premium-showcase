import { useEffect, useState } from 'react';

const CinematicEffects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(progress, 1));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="scroll-progress-bar">
      <div 
        className="scroll-progress-fill"
        style={{ width: `${scrollProgress * 100}%` }}
      />
    </div>
  );
};

export default CinematicEffects;