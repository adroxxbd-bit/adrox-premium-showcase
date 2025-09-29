import { useEffect, useState, useRef } from 'react';

const CinematicEffects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);
  const cursorTrailRef = useRef<HTMLDivElement>(null);
  const rippleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll progress tracking
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(Math.min(progress, 1));
    };

    // Mouse tracking for cursor effects and particle interactions
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Update cursor trail position
      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = e.clientX + 'px';
        cursorTrailRef.current.style.top = e.clientY + 'px';
      }
    };

    // Click ripple effect
    const handleClick = (e: MouseEvent) => {
      if (rippleRef.current) {
        const ripple = document.createElement('div');
        ripple.className = 'cursor-ripple';
        ripple.style.left = e.clientX + 'px';
        ripple.style.top = e.clientY + 'px';
        document.body.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 1000);
      }
    };

    // Generate floating particles
    const generateParticles = () => {
      const newParticles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.6 + 0.2
      }));
      setParticles(newParticles);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);
    
    generateParticles();
    const particleInterval = setInterval(() => {
      setParticles(prev => prev.map(p => ({
        ...p,
        x: p.x + (Math.sin(Date.now() * 0.001 + p.id) * 0.5),
        y: p.y + (Math.cos(Date.now() * 0.001 + p.id) * 0.3),
        opacity: p.opacity + Math.sin(Date.now() * 0.002 + p.id) * 0.1
      })));
    }, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      clearInterval(particleInterval);
    };
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="scroll-progress-bar">
        <div 
          className="scroll-progress-fill"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Animated Background Gradient */}
      <div className="animated-background" />

      {/* Floating 3D Organic Shapes */}
      <div className="floating-blobs">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        <div className="blob blob-5" />
      </div>

      {/* Particle System */}
      <div className="particle-system">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.x + 'px',
              top: particle.y + 'px',
              width: particle.size + 'px',
              height: particle.size + 'px',
              opacity: Math.max(0, Math.min(1, particle.opacity))
            }}
          />
        ))}
      </div>

      {/* Cursor Trail */}
      <div ref={cursorTrailRef} className="cursor-trail" />

      {/* Continuous Camera Pan Effect */}
      <div className="camera-pan-layer" />
    </>
  );
};

export default CinematicEffects;