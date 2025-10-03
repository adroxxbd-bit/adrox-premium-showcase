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
    delay: 100
  },
  {
    icon: FileText,
    title: "Marketing Materials",
    description: "Posters, flyers, and business cards that communicate your message with impact.",
    delay: 200
  },
  {
    icon: Globe,
    title: "Web Banners & Ads",
    description: "Eye-catching designs for campaigns and websites to grab instant attention.",
    delay: 300
  }
];

const CinematicServices = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="services-section" ref={sectionRef} className="services-section">
      <div className="services-content">
        <h2 className={`section-title ${isVisible ? 'animate' : ''}`}>Our Services</h2>
        <p className={`section-subtitle ${isVisible ? 'animate' : ''}`}>
          Comprehensive design solutions for your brand
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`service-card ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${service.delay}ms` }}
              >
                <div className="service-icon-wrapper">
                  <Icon className="service-icon" />
                </div>
                
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CinematicServices;