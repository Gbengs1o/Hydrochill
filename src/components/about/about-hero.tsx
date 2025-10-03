
'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutHeroImage = PlaceHolderImages.find(p => p.id === 'about-hero');

export default function AboutHero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      className="relative h-screen min-h-[800px] flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image */}
      {aboutHeroImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <Image
            src={aboutHeroImage.imageUrl}
            alt={aboutHeroImage.description}
            data-ai-hint={aboutHeroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content */}
      <div className="relative z-20 container px-4 md:px-6 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
          About <span className="text-gradient">HydroChill</span>
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-lg text-white/80 md:text-xl">
          We are innovators, health enthusiasts, and environmental stewards, dedicated to redefining how the world drinks water.
        </p>
      </div>
    </section>
  );
}
