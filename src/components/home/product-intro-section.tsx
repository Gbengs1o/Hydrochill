import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function ProductIntroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container grid items-center gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-4">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Cutting-Edge Design
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl font-headline">
            Engineered for <span className="text-gradient">Excellence</span>
          </h2>
          <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Every curve and component of the HydroChill bottle is meticulously crafted from premium materials for a superior hydration experience. It's not just a bottle; it's a statement.
          </p>
          <Button asChild variant="link" className="px-0 text-lg">
            <Link href="/features">
              Explore all features <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="flex justify-center">
          {/* The image that was here has been removed as requested. */}
        </div>
      </div>
    </section>
  );
}
