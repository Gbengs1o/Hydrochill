
'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

export default function AboutVision() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

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

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!sectionRef.current) return;

          const rect = sectionRef.current.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
          const windowHeight = window.innerHeight;

          const scrollStart = windowHeight * 0.8;
          const scrollEnd = -sectionHeight * 0.2;
          const totalScroll = scrollStart - scrollEnd;
          const currentScroll = scrollStart - sectionTop;

          const progress = Math.max(0, Math.min(1, currentScroll / totalScroll));
          setScrollProgress(progress);

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for joining!",
        description: "You're now on the list for exclusive updates.",
      });
      setEmail('');
    } else {
       toast({
        variant: "destructive",
        title: "Email is required",
        description: "Please enter your email address to join.",
      });
    }
  };

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    delay: Math.random() * 3,
    duration: 3 + Math.random() * 4,
    x: Math.random() * 100,
    size: 2 + Math.random() * 4
  }));

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center py-32 overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bottom-0 w-1 h-1 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${particle.x}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 1s ease-in-out'
            }}
          />
        ))}
      </div>

      {/* Radial Gradient Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, rgba(0,0,0,${0.3 * scrollProgress}) 100%)`
        }}
      />

      <div className="container px-4 md:px-6 relative z-10">
        {/* Main Heading */}
        <div 
          className="text-center mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider px-4 py-2 rounded-full bg-primary/10 backdrop-blur-sm">
              The Future Awaits
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight font-headline leading-tight">
            Our Vision for
            <br />
            <span className="text-gradient">Tomorrow</span>
          </h2>
        </div>

        {/* Vision Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {[
            {
              title: 'Universal Access',
              description: 'A world where clean, purified water is not a privilege but a fundamental right—accessible to every person, in every corner of the globe.',
              icon: '🌍',
              delay: 0.2
            },
            {
              title: 'Zero Waste Future',
              description: 'Eliminating billions of single-use plastic bottles from our oceans and landfills through innovative, sustainable hydration solutions.',
              icon: '♻️',
              delay: 0.4
            },
            {
              title: 'AI-Powered Wellness',
              description: 'Next-generation smart hydration systems that predict your needs, optimize your health, and seamlessly integrate into your connected lifestyle.',
              icon: '🚀',
              delay: 0.6
            }
          ].map((card, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-secondary/40 to-secondary/20 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-105"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(60px)',
                transition: `all 1s cubic-bezier(0.4, 0, 0.2, 1) ${card.delay}s`
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="text-5xl mb-4">{card.icon}</div>
                <h3 className="text-2xl font-bold font-headline mb-4">{card.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Epic Closing Statement */}
        <div 
          className="max-w-5xl mx-auto text-center space-y-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
            transition: 'all 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/30 to-primary/20 rounded-3xl blur-3xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-secondary/60 to-secondary/30 backdrop-blur-xl rounded-3xl p-12 border border-primary/20">
              <p className="text-2xl md:text-3xl lg:text-4xl font-bold leading-relaxed mb-6">
                We're not just building products.
                <br />
                <span className="text-gradient">We're engineering a revolution.</span>
              </p>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-8">
                HydroChill is the catalyst for a global movement towards sustainable wellness. 
                Every innovation we create, every bottle we design, every feature we develop 
                brings us closer to a world where health and sustainability are inseparable.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-primary/20">
                <div className="text-center px-6">
                  <div className="text-4xl font-extrabold text-gradient">1B+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Plastic Bottles Saved</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-primary/20" />
                <div className="text-center px-6">
                  <div className="text-4xl font-extrabold text-gradient">50K+</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Global Community</div>
                </div>
                <div className="hidden sm:block w-px h-12 bg-primary/20" />
                <div className="text-center px-6">
                  <div className="text-4xl font-extrabold text-gradient">∞</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide mt-1">Possibilities Ahead</div>
                </div>
              </div>
            </div>
          </div>

          {/* Final Call to Action */}
          <div 
            className="pt-12"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1) 1.2s'
            }}
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline mb-4">
              The future of hydration isn't coming.
            </p>
            <p className="text-3xl md:text-4xl lg:text-5xl font-extrabold font-headline text-gradient mb-8">
              It's already here.
            </p>
             <form onSubmit={handleJoinSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email to join the movement"
                className="flex-1 text-center sm:text-left bg-background/50 border-primary/20 focus:ring-primary/50"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="lg">
                Join Now <Send className="ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(20px);
            opacity: 0;
          }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </section>
  );
}
