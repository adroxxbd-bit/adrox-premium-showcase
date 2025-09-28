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
    <section ref={sectionRef} className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className={`text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 heading-underline ${isVisible ? 'animate-underline' : ''}`}>
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground font-sans">
            Comprehensive design solutions for your brand
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`service-card card-fade-in ${isVisible ? 'animate ' + service.delay : ''}`}
              >
                <div className="mb-6 relative z-10">
                  <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary service-icon" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold text-foreground mb-4 service-title">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed font-sans">
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