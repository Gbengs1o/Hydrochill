
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useEffect, useState } from 'react';

const conceptImage = PlaceHolderImages.find(p => p.id === 'product-shot');
const backgroundImage = PlaceHolderImages.find(p => p.id === 'concept-background');

export default function ConceptPhaseSection() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('concept-section');
      if (section) {
        const rect = section.getBoundingClientRect();
        // Calculate scroll progress within the section (0 to 1)
        const progress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
        setScrollY(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="concept-section" className="relative w-full min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {backgroundImage && (
        <Image
          src={backgroundImage.imageUrl}
          alt={backgroundImage.description}
          data-ai-hint={backgroundImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/70 z-10" />
      <div className="container relative z-20 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-6 text-white">
              FROM CONCEPT
              <br />
              TO <span className="text-gradient">REALITY</span>
            </h2>
            <p className="text-lg text-white/80 mb-8 max-w-md mx-auto md:mx-0">
              The HydroChill bottle is an innovative concept currently in the prototype phase. We are passionately refining the technology and design to bring you the future of hydration.
            </p>
            <Button
              asChild
              size="lg"
              className="border-2 border-primary bg-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase backdrop-blur-sm"
            >
              <Link href="/about">
                FOLLOW OUR JOURNEY
              </Link>
            </Button>
          </div>

          {/* Right Side - Image */}
          {conceptImage && (
            <div className="flex justify-center items-center h-full">
              <div
                style={{ transform: `translateY(${scrollY * -100}px) scale(1.1)` }}
                className="transition-transform duration-300 ease-out"
              >
                <Image
                  src={conceptImage.imageUrl}
                  alt={conceptImage.description}
                  data-ai-hint={conceptImage.imageHint}
                  width={450}
                  height={450}
                  className="object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
