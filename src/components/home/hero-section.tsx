// Header Component
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/shop', label: 'SHOP' },
  { href: '/features', label: 'FEATURES' },
  { href: '/support', label: 'SUPPORT' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-30 w-full">
      <div className="container mx-auto flex h-20 items-center justify-end px-4">
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "relative text-sm font-semibold uppercase tracking-wider transition-colors duration-300",
                  "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[2px] after:w-full",
                  "after:bg-white after:origin-center after:transition-transform duration-300",
                  isActive 
                    ? "text-white after:scale-x-100" 
                    : "text-white/80 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="flex md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-black/90 backdrop-blur-sm border-l-gray-800 text-white">
              <div className="flex justify-end mb-8">
                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
              </div>
              <nav className="flex flex-col items-center justify-center gap-8 text-center mt-16">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors",
                      pathname === href ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Hero Section Component
import Image from 'next/image';
import { Droplets, Thermometer, Zap } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';


const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const productShotImage = PlaceHolderImages.find(p => p.id === 'product-shot');


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
  return (
    <>
      {/* Header is now part of the layout and not called here */}
      
      {/* Hero Section */}
      <section className="relative w-full h-screen min-h-[800px] flex items-center text-white overflow-hidden">
        {/* Background Image Only */}
        {heroImage &&
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            data-ai-hint={heroImage.imageHint}
            fill
            className="object-cover"
            priority
          />
        }
        
        {/* Content Container */}
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex items-center justify-between h-full">
              
              {/* Left Side - Text Content */}
              <div className="flex-1 max-w-lg">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight uppercase leading-none mb-6">
                  HYDROCHILL:
                  <br />
                  THE FUTURE
                  <br />
                  OF HYDRATION
                </h1>
                <p className="text-lg lg:text-xl text-white/90 mb-8 leading-relaxed max-w-md">
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

              {/* Center - Product Image */}
              <div className="flex-1 flex justify-center items-center relative">
                <div className="relative w-[300px] h-[600px] lg:w-[400px] lg:h-[700px]">
                  
                  {/* Glow Effects */}
                  <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-cyan-400/20 rounded-full blur-[80px]" />
                  <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 w-[200px] h-[100px] bg-cyan-500/30 rounded-full blur-[60px]" />
                  
                  {/* Product Image */}
                  {productShotImage && (
                    <Image
                      src={productShotImage.imageUrl}
                      alt={productShotImage.description}
                      data-ai-hint={productShotImage.imageHint}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  )}

                  {/* Reflection */}
                  {productShotImage && (
                    <div className="absolute inset-0 top-[90%]">
                      <Image
                        src={productShotImage.imageUrl}
                        alt="" 
                        fill
                        className="object-contain scale-y-[-1] opacity-15"
                        style={{
                          maskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 50%, transparent 100%)',
                          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 10%, black 50%, transparent 100%)'
                        }}
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Right Side - Feature Icons (Vertically Stacked) */}
              <div className="flex-1 flex justify-end">
                <div className="flex flex-col items-center gap-16 lg:gap-20">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="flex flex-col items-center text-center space-y-3 group cursor-default"
                    >
                      <feature.Icon 
                        className="h-8 w-8 lg:h-10 lg:w-10 text-cyan-400 transition-all duration-300 group-hover:scale-110" 
                        strokeWidth={1.5} 
                      />
                      <p className="text-xs lg:text-sm font-medium text-white/90 transition-colors duration-300 tracking-wide whitespace-nowrap">
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
    </>
  );
}
