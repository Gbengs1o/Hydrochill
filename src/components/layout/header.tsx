"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { HydroChillLogo } from '../icons';

const navLinks = [
  { href: '/', label: 'HOME' },
  { href: '/about', label: 'ABOUT US' },
  { href: '/features', label: 'FEATURES' },
  { href: '/upload', label: 'UPLOAD' },
];

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="absolute top-0 z-50 w-full text-white">
      <div className="container mx-auto flex h-24 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <HydroChillLogo className="h-6 w-auto" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={label}
                href={href}
                className={cn(
                  "relative text-sm font-medium uppercase tracking-wider transition-colors duration-300",
                  "after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-full after:bg-white after:origin-center after:transition-transform",
                  isActive 
                    ? "text-white after:scale-x-100" 
                    : "text-white/70 hover:text-white after:scale-x-0 hover:after:scale-x-100"
                )}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Navigation Trigger */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-black/90 backdrop-blur-sm border-l-gray-800 text-white">
              <div className="flex justify-between items-center mb-8 px-2">
                 <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <HydroChillLogo className="h-6 w-auto" />
                 </Link>
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
