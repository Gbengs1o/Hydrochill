import Link from 'next/link';
import { HydroChillLogo } from '@/components/icons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E1E1E] text-primary-foreground">
      <div className="container py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center">
            <Link href="/" aria-label="Back to homepage">
              <HydroChillLogo className="h-7 w-auto" />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HydroChill Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/features" className="text-sm text-accent hover:underline">Features</Link>
            <Link href="/about" className="text-sm text-accent hover:underline">About</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
