'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function AboutStoryScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const containerTop = rect.top;
          const containerHeight = rect.height;
          const windowHeight = window.innerHeight;

          const scrollStart = windowHeight;
          const scrollEnd = -containerHeight + windowHeight;
          const totalScroll = scrollStart - scrollEnd;
          const currentScroll = scrollStart - containerTop;

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

  const getOpacity = (start: number, end: number) => {
    if (scrollProgress < start) return 0;
    if (scrollProgress > end) return 0;
    if (scrollProgress < start + 0.1) return (scrollProgress - start) / 0.1;
    if (scrollProgress > end - 0.1) return (end - scrollProgress) / 0.1;
    return 1;
  };

  const getTransform = (start: number, end: number, distance = 100) => {
    if (scrollProgress < start) return `translateY(${distance}px)`;
    if (scrollProgress > end) return `translateY(-${distance}px)`;
    if (scrollProgress < start + 0.1) {
      const progress = (scrollProgress - start) / 0.1;
      return `translateY(${distance * (1 - progress)}px)`;
    }
    if (scrollProgress > end - 0.1) {
      const progress = (end - scrollProgress) / 0.1;
      return `translateY(-${distance * (1 - progress)}px)`;
    }
    return 'translateY(0)';
  };

  const getScale = (start: number, end: number) => {
    if (scrollProgress < start) return 0.8;
    if (scrollProgress > end) return 0.8;
    if (scrollProgress < start + 0.1) {
      const progress = (scrollProgress - start) / 0.1;
      return 0.8 + (0.2 * progress);
    }
    if (scrollProgress > end - 0.1) {
      const progress = (end - scrollProgress) / 0.1;
      return 0.8 + (0.2 * progress);
    }
    return 1;
  };

  return (
    <div ref={containerRef} className="relative bg-background">
      {/* Hero Section - Opening */}
      <section className="relative h-screen min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/aBUeRYlKEpY?autoplay=1&mute=1&loop=1&playlist=aBUeRYlKEpY&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 z-10" />
        <div className="relative z-20 container px-4 md:px-6 text-center text-white">
          <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl font-headline mb-6">
            The <span className="text-gradient">HydroChill</span> Journey
          </h1>
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-white/90 leading-relaxed">
            A revolution in hydration, born from passion, perfected through innovation
          </p>
        </div>
      </section>

      {/* Chapter 1 - The Problem */}
      <section className="relative min-h-screen flex items-center justify-center py-32">
        <div 
          className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center"
          style={{
            opacity: getOpacity(0.1, 0.3),
            transform: getTransform(0.1, 0.3, 80)
          }}
        >
          <div className="space-y-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Chapter One</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              The Wake-Up Call
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                In a world drowning in single-use plastics, where over 1 million bottles are sold every minute, our founders witnessed an environmental crisis unfolding before their eyes. But the problem ran deeper than pollution.
              </p>
              <p>
                Athletes were getting sick from contaminated reusable bottles. Busy professionals struggled to stay hydrated throughout their demanding days. Parents worried about the quality of water their children consumed at school.
              </p>
              <p className="text-xl font-semibold text-foreground">
                The question became clear: Why should anyone compromise between convenience, health, and environmental responsibility?
              </p>
            </div>
          </div>
          <div 
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ transform: `scale(${getScale(0.1, 0.3)})` }}
          >
            <Image
              src="https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/10/Generated-Image-September-25-2025-11_17PM.png"
              alt="Environmental impact of single-use plastics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Chapter 2 - The Vision */}
      <section className="relative min-h-screen flex items-center justify-center py-32 bg-secondary/20">
        <div 
          className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center"
          style={{
            opacity: getOpacity(0.3, 0.5),
            transform: getTransform(0.3, 0.5, 80)
          }}
        >
          <div 
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            style={{ transform: `scale(${getScale(0.3, 0.5)})` }}
          >
            <Image
              src="https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/10/Generated-Image-September-25-2025-11_26PM.png"
              alt="Innovative design and technology"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Chapter Two</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              Engineering the Impossible
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                A diverse team of engineers, material scientists, and designers assembled with one audacious goal: create a bottle that purifies water on demand, maintains perfect temperature for hours, and looks stunning doing it.
              </p>
              <p>
                Three years of relentless testing followed. From scorching deserts to frozen tundras, from bustling cities to remote hiking trails—we pushed our prototypes to their absolute limits.
              </p>
              <p className="text-xl font-semibold text-foreground">
                The result? A self-cleaning UV-C purification system that eliminates 99.99% of harmful microorganisms, paired with advanced thermal insulation that defies physics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter 3 - The Technology */}
      <section className="relative h-screen min-h-[100vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <iframe
            src="https://www.youtube.com/embed/9PlyrSphK4U?autoplay=1&mute=1&loop=1&playlist=9PlyrSphK4U&controls=0&showinfo=0&modestbranding=1&rel=0&playsinline=1"
            className="absolute top-1/2 left-1/2 w-[177.77vh] h-[100vw] min-w-full min-h-full -translate-x-1/2 -translate-y-1/2"
            allow="autoplay; encrypted-media"
            style={{ border: 'none', pointerEvents: 'none' }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
        <div 
          className="relative z-20 container px-4 md:px-6 text-center text-white max-w-5xl"
          style={{
            opacity: getOpacity(0.5, 0.7),
            transform: getTransform(0.5, 0.7, 60)
          }}
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Chapter Three</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mt-4 mb-8 leading-tight">
            Smart Hydration, Perfected
          </h2>
          <div className="space-y-6 text-xl text-white/90 leading-relaxed">
            <p>
              Intelligent sensors monitor your hydration patterns, learning your lifestyle and sending personalized reminders when you need them most.
            </p>
            <p>
              Touch-activated temperature display. Integrated hydration tracking. Wireless charging. Every feature meticulously crafted to enhance your daily ritual.
            </p>
            <p className="text-2xl font-bold text-white">
              This isn't just technology—it's your personal wellness companion.
            </p>
          </div>
        </div>
      </section>

      {/* Chapter 4 - The Impact */}
      <section className="relative min-h-screen flex items-center justify-center py-32">
        <div 
          className="container px-4 md:px-6 grid lg:grid-cols-2 gap-12 items-center"
          style={{
            opacity: getOpacity(0.7, 0.9),
            transform: getTransform(0.7, 0.9, 80)
          }}
        >
          <div className="space-y-6">
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Chapter Four</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline leading-tight">
              A Movement, Not Just a Product
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Every HydroChill bottle eliminates an average of 217 single-use plastic bottles per year. Our community of over 50,000 users has already prevented millions of bottles from entering landfills and oceans.
              </p>
              <p>
                But the impact goes beyond environmental metrics. Athletes report improved performance. Office workers stay focused longer. Parents have peace of mind knowing their families drink clean, pure water.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Together, we're not just changing how people drink water—we're transforming how they live.
              </p>
            </div>
          </div>
          <div 
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            style={{ transform: `scale(${getScale(0.7, 0.9)})` }}
          >
            <Image
              src="https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/10/Generated-Image-September-25-2025-11_42PM.png"
              alt="HydroChill community impact"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* Final Chapter - The Future */}
      <section className="relative min-h-screen flex items-center justify-center py-32 bg-gradient-to-b from-background to-secondary/30">
        <div 
          className="container px-4 md:px-6 text-center max-w-5xl"
          style={{
            opacity: getOpacity(0.85, 1),
            transform: getTransform(0.85, 1, 60)
          }}
        >
          <div className="mb-12">
            <Image
              src="https://violet-finch-601645.hostingersite.com/wp-content/uploads/2025/09/herosss.png"
              alt="HydroChill bottle"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Your Chapter</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline mt-4 mb-8 leading-tight">
            Write Your Story With Us
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
            We believe that superior technology and thoughtful design can solve the fundamental challenges of modern hydration. 
            Every sip from a HydroChill bottle is a step toward a healthier you and a cleaner planet.
          </p>
          <p className="text-2xl md:text-3xl font-bold text-foreground">
            This is more than hydration. This is transformation.
          </p>
        </div>
      </section>
    </div>
  );
}