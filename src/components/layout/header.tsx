
"use client";

import { useState, useEffect } from 'react';
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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // On the homepage, header is transparent so scrolling should make it opaque
      // On other pages, header is already opaque, so we don't need to change it
      if (pathname === '/') {
        setIsScrolled(window.scrollY > 50);
      }
    };
    // Reset scroll state when path changes
    setIsScrolled(pathname !== '/');
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const isHeaderOpaque = isScrolled || pathname !== '/';

  const headerClasses = cn(
    "fixed top-0 z-50 w-full transition-all duration-300 ease-in-out h-24",
    isHeaderOpaque ? "bg-card/80 backdrop-blur-sm shadow-lg !h-20" : "bg-transparent"
  );
  
  const linkColorClasses = cn(
    "relative text-sm font-medium uppercase tracking-wider transition-colors duration-300 after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-full after:origin-center after:scale-x-0 after:transition-transform",
    isHeaderOpaque ? "text-white/80 hover:text-white after:bg-white" : "text-black/80 hover:text-black after:bg-black",
  );

  const activeLinkColorClasses = isHeaderOpaque ? "text-white after:scale-x-100" : "text-black after:scale-x-100";
  const logoColor = isHeaderOpaque ? "text-white" : "text-black";
  const mobileMenuIconColor = isHeaderOpaque ? "text-white" : "text-black";

  return (
    <header className={headerClasses}>
      <div className="container mx-auto flex h-full items-center justify-between px-4">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center gap-2">
            <HydroChillLogo className={cn("h-6 w-auto transition-colors duration-300", logoColor)} />
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
                className={cn(linkColorClasses, isActive && activeLinkColorClasses)}
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
              <Button variant="ghost" size="icon" className={cn("hover:bg-white/10", mobileMenuIconColor)}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-black/90 backdrop-blur-sm border-l-gray-800 text-white">
              <div className="flex justify-between items-center mb-8 px-2">
                 <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                    <HydroChillLogo className="h-6 w-auto text-white" />
                 </Link>
                 <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                   <X className="h-6 w-6" />
                   <span className="sr-only">Close menu</span>
                 </Button>
              </div>
              <nav className="flex flex-col items-center justify-center gap-8 text-center mt-16">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "text-2xl font-semibold transition-colors",
                      isActive ? "text-white" : "text-white/60 hover:text-white"
                    )}
                  >
                    {label}
                  </Link>
                )})}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
