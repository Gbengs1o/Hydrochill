
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Droplets, Thermometer, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');

const features = [
  {
    Icon: Thermometer,
    title: 'Precision Temperature',
  },
  {
    Icon: Zap,
    title: 'All-Day Charge',
  },
  {
    Icon: Droplets,
    title: 'Durable Design',
  },
];

export default function HeroSection() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center text-white overflow-hidden">
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
      <div className="absolute inset-0 bg-black/30 z-10" />

      {/* Content Container */}
      <div className="relative z-20 w-full h-full flex items-center">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left Side - Text Content */}
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-none mb-6">
                HYDROCHILL:
                <br />
                THE FUTURE
                <br />
                OF HYDRATION
              </h1>
              <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-md mx-auto md:mx-0">
                Experience unparalleled temperature control and elegant design.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="border-2 border-cyan-400 bg-transparent text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
              >
                <Link href="/features">
                  EXPLORE FEATURES
                </Link>
              </Button>
            </div>

            {/* Right Side - Feature Icons */}
            <div className="flex justify-center md:justify-end items-center">
              <div className="flex flex-col items-start gap-16 lg:gap-20">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center gap-4 text-left cursor-default group"
                  >
                    <feature.Icon 
                      className="h-8 w-8 lg:h-10 lg:w-10 text-cyan-400 transition-all duration-300 group-hover:scale-110" 
                      strokeWidth={1.5} 
                    />
                    <p className="text-sm lg:text-base font-medium text-white/90 transition-colors duration-300 tracking-wide whitespace-nowrap">
                      {feature.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
