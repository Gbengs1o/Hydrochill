
'use client';

import { FormEvent, useState } from 'react';
import Link from 'next/link';
import { HydroChillLogo } from '@/components/icons';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { useToast } from '@/hooks/use-toast';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleJoinSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      toast({
        title: "You're on the list!",
        description: "Thanks for signing up. We'll keep you updated on our release.",
      });
      setEmail('');
    } else {
       toast({
        variant: "destructive",
        title: "Invalid Email",
        description: "Please enter a valid email address.",
      });
    }
  };

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

          {/* Column 3: Signup Form */}
          <div className="flex flex-col items-center md:items-start md:col-span-1 md:items-end">
            <h3 className="text-lg font-semibold mb-4 font-headline text-center md:text-left w-full">Stay Updated</h3>
            <form onSubmit={handleJoinSubmit} className="flex flex-col gap-2 w-full max-w-sm">
                <p className="text-sm text-muted-foreground mb-2 text-center md:text-left">
                    Be the first to know about our launch.
                </p>
              <div className="flex gap-2">
                <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 bg-background/50 border-primary/20"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Button type="submit" size="icon" aria-label="Join waitlist">
                    <Send />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
