import { useEffect, useRef, useState } from 'react';
import { Smartphone, Palette, FileText, Globe } from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: "Social Media Design",
    description: "Scroll-stopping posts, stories, and banners that boost engagement and visibility.",
    delay: "card-1"
  },
  {
    icon: Palette,
    title: "Custom Creative Design",
    description: "Includes Logo Design, Marketing Materials, Web Banners & Ads, and tailored custom projects.",
    delay: "card-2"
  },
  {
    icon: FileText,
    title: "Marketing Materials",
    description: "Posters, flyers, and business cards that communicate your message with impact.",
    delay: "card-3"
  },
  {
    icon: Globe,
    title: "Web Banners & Ads",
    description: "Eye-catching designs for campaigns and websites to grab instant attention.",
    delay: "card-4"
  }
];

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif font-bold text-foreground mb-3 heading-underline ${isVisible ? 'animate-underline' : ''}`}>
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground font-sans">
            Comprehensive design solutions for your brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`service-card card-fade-in cinematic-card ${isVisible ? 'animate ' + service.delay : ''}`}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  e.currentTarget.style.setProperty('--mouse-x', `${x * 0.1}px`);
                  e.currentTarget.style.setProperty('--mouse-y', `${y * 0.1}px`);
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.setProperty('--mouse-x', '0px');
                  e.currentTarget.style.setProperty('--mouse-y', '0px');
                }}
              >
                <div className="mb-4 relative z-10">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 icon-container">
                    <Icon className="w-6 h-6 text-primary service-icon" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-3 service-title">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;