
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { HydroChillLogo } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/about', label: 'About Us' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const NavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-sm font-medium transition-colors text-foreground/70 hover:text-foreground",
          isActive && "text-foreground"
        )}
      >
        {label}
      </Link>
    );
  };
  
  const MobileNavLink = ({ href, label }: { href: string; label: string }) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={cn(
          "text-lg font-medium transition-colors hover:text-foreground",
          isActive ? "text-foreground" : "text-muted-foreground"
        )}
      >
        {label}
      </Link>
    );
  };

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        isScrolled ? 'bg-background/80 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <div className="container flex h-16 items-center">
        <Link href="/" className={cn("mr-6 flex items-center text-foreground")}>
          <HydroChillLogo className="h-6 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end gap-4">
          <Button asChild className='hidden md:flex'>
            <Link href="/features">Discover</Link>
          </Button>
          <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={cn("md:hidden text-foreground hover:bg-foreground/10")}>
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:w-3/4">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center mb-8">
                   <Link href="/" className="flex items-center">
                     <HydroChillLogo className="h-6 w-auto text-primary" />
                   </Link>
                   <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                     <X className="h-6 w-6" />
                     <span className="sr-only">Close menu</span>
                   </Button>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <MobileNavLink key={link.href} {...link} />
                  ))}
                </nav>
                <div className='mt-auto pt-6'>
                  <Button asChild size="lg" className="w-full">
                    <Link href="/features">Discover</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
