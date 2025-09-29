import { useEffect, useRef, useState } from 'react';
import { Smartphone, Palette, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Social Media Design",
    description: "Scroll-stopping posts, stories, and banners that boost engagement and visibility.",
    delay: 0
  },
  {
    icon: Palette,
    title: "Custom Creative Design",
    description: "Includes Logo Design, Marketing Materials, Web Banners & Ads, and tailored custom projects.",
    delay: 200
  },
  {
    icon: FileText,
    title: "Marketing Materials",
    description: "Posters, flyers, and business cards that communicate your message with impact.",
    delay: 400
  },
  {
    icon: Globe,
    title: "Web Banners & Ads",
    description: "Eye-catching designs for campaigns and websites to grab instant attention.",
    delay: 600
  }
];

const CinematicServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleCardHover = (index: number, event: React.MouseEvent<HTMLDivElement>) => {
    setHoveredCard(index);
    
    // Create particle burst effect
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 8; i++) {
      const spark = document.createElement('div');
      spark.className = 'hover-spark';
      spark.style.left = centerX + 'px';
      spark.style.top = centerY + 'px';
      spark.style.setProperty('--angle', `${(i * 45)}deg`);
      
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 800);
    }
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
  };

  return (
    <section ref={sectionRef} className="cinematic-services">
      <div className="services-content">
        <div className="section-header">
          <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>
            <span className="title-text">Our Services</span>
            <div className="title-underline">
              <div className="underline-fill" />
              <div className="underline-glow" />
            </div>
          </h2>
          <p className={`section-subtitle ${isVisible ? 'animate' : ''}`}>
            Comprehensive design solutions for your brand
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`service-card-3d ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${service.delay}ms` }}
                onMouseEnter={(e) => handleCardHover(index, e)}
                onMouseLeave={handleCardLeave}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  
                  e.currentTarget.style.setProperty('--mouse-x', `${x * 0.1}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y * 0.1}px`);
                  e.currentTarget.style.setProperty('--rotate-x', `${y * -0.05}deg`);
                  e.currentTarget.style.setProperty('--rotate-y', `${x * 0.05}deg`);
                }}
              >
                <div className="card-glow" />
                <div className="card-content">
                  <div className="icon-container">
                    <div className="icon-background" />
                    <Icon className={`service-icon ${hoveredCard === index ? 'animate' : ''}`} />
                    <div className="icon-pulse" />
                  </div>
                  
                  <h3 className="service-title">
                    {service.title}
                    <div className="title-underline-small" />
                  </h3>
                  
                  <p className="service-description">
                    {service.description}
                  </p>
                  
                  <div className="card-button">
                    <span>Learn More</span>
                    <div className="button-border-reveal" />
                  </div>
                </div>
                
                <div className="card-floating-particles">
                  {[...Array(5)].map((_, i) => (
                    <div 
                      key={i} 
                      className="floating-particle"
                      style={{ animationDelay: `${i * 200}ms` }}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section divider */}
      <div className="section-divider">
        <div className="divider-line" />
      </div>
    </section>
  );
};

export default CinematicServices;