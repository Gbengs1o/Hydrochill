
import Link from 'next/link';
import { HydroChillLogo } from '@/components/icons';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Button } from '../ui/button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card text-card-foreground border-t border-border">
      <div className="container py-12 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Column 1: Logo and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Link href="/" aria-label="Back to homepage" className="mb-2">
              <HydroChillLogo className="h-7 w-auto" />
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              &copy; {currentYear} HydroChill Inc.
              <br />
              All rights reserved.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 font-headline">Navigate</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold mb-4 font-headline">Follow Us</h3>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Twitter">
                  <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="#" aria-label="Facebook">
                  <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
