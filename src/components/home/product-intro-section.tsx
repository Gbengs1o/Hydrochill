'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Droplets, Zap, Shield, Thermometer } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function ProductIntroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20
    });
  };

  const features = [
    {
      icon: Droplets,
      title: 'UV-C Purification',
      description: '99.99% bacteria elimination',
      delay: 0.2
    },
    {
      icon: Thermometer,
      title: 'Temperature Control',
      description: 'Cold for 24h, Hot for 12h',
      delay: 0.3
    },
    {
      icon: Zap,
      title: 'Smart Tracking',
      description: 'AI-powered hydration insights',
      delay: 0.4
    },
    {
      icon: Shield,
      title: 'Premium Materials',
      description: 'Medical-grade stainless steel',
      delay: 0.5
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 lg:py-40 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
        <div 
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{
            transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
            transition: 'transform 0.3s ease-out'
          }}
        />
      </div>

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Content */}
          <div 
            className="space-y-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div>
              <div className="inline-flex items-center rounded-full bg-gradient-to-r from-primary/20 to-primary/10 px-4 py-2 text-sm font-semibold text-primary backdrop-blur-sm border border-primary/20 mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Cutting-Edge Innovation
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline leading-tight mb-6">
                Engineered for
                <br />
                <span className="text-gradient">Perfection</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Every curve, every component, every detail of the HydroChill bottle represents the pinnacle of hydration technology. This isn't just a water bottle—it's a precision instrument designed to transform your daily wellness ritual.
              </p>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="group relative p-6 rounded-xl bg-gradient-to-br from-secondary/50 to-secondary/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                      transition: `all 0.8s cubic-bezier(0.4, 0, 0.2, 1) ${feature.delay}s`
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold mb-1 text-sm">{feature.title}</h3>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Button */}
            <div 
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
              }}
            >
              <Button 
                asChild 
                size="lg"
                className="group relative overflow-hidden bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 text-lg px-8 py-6 rounded-full"
              >
                <Link href="/features" className="flex items-center">
                  <span className="relative z-10">Explore All Features</span>
                  <ArrowRight className="ml-2 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Content - Video */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0) scale(1)' : 'translateX(40px) scale(0.95)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            {/* Decorative elements */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-2xl opacity-50 animate-pulse" />
            
            <Card className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-primary/20 bg-secondary/30 backdrop-blur-sm">
              <div className="aspect-video relative">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/wueUdMgbrBQ?autoplay=1&loop=1&playlist=wueUdMgbrBQ&controls=0&mute=1&showinfo=0&autohide=1&modestbranding=1&rel=0&playsinline=1"
                  title="HydroChill Product Showcase"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                
                {/* Video overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>
              
              {/* Video label */}
              <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  <span className="text-white text-xs font-semibold">Live Demo</span>
                </div>
              </div>
            </Card>

            {/* Floating stats */}
            <div 
              className="absolute -bottom-6 -right-6 bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 shadow-2xl border border-primary/30"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(20px) rotate(-5deg)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-extrabold text-primary-foreground">4.9★</div>
                <div className="text-xs text-primary-foreground/80 font-medium mt-1">Customer Rating</div>
              </div>
            </div>

            <div 
              className="absolute -top-6 -left-6 bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 shadow-2xl border border-primary/20 backdrop-blur-sm"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) rotate(0deg)' : 'translateY(-20px) rotate(5deg)',
                transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
              }}
            >
              <div className="text-center">
                <div className="text-3xl font-extrabold text-foreground">50K+</div>
                <div className="text-xs text-muted-foreground font-medium mt-1">Happy Users</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}