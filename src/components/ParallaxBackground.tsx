import { useEffect, useState } from 'react';

const ParallaxBackground = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Parallax layer 1 - slowest */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <div className="parallax-orb parallax-orb-1"></div>
        <div className="parallax-orb parallax-orb-2"></div>
      </div>
      
      {/* Parallax layer 2 - medium */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{ transform: `translateY(${scrollY * 0.3}px)` }}
      >
        <div className="parallax-orb parallax-orb-3"></div>
        <div className="parallax-orb parallax-orb-4"></div>
      </div>
      
      {/* Parallax layer 3 - fastest */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      >
        <div className="parallax-orb parallax-orb-5"></div>
      </div>
    </div>
  );
};

export default ParallaxBackground;