
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);
    const [showContent, setShowContent] = useState(false);
    const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

    useEffect(() => {
      const contentTimer = setTimeout(() => {
        setShowContent(true);
      }, 500); 

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        clearTimeout(contentTimer);
      };
    }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center text-white overflow-hidden animate-bg-fade-in">
      {/* Background Image */}
      {heroImage && (
        <div
          className="absolute inset-0 w-full h-full"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        >
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}
        
      {/* Overlay for darkening the background image slightly */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Content Container */}
      <div className={cn(
          "relative z-20 w-full h-full flex items-center transition-opacity duration-1000",
          showContent ? "opacity-100" : "opacity-0"
        )}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-none mb-6">
                Ready to Elevate
                <br />
                Your Hydration?
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                Discover the HydroChill experience today.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="border-2 border-cyan-400 bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
              >
                <Link href="/features">
                  Explore Features
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
