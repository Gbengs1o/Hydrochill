
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ConceptPhaseSection() {
  return (
    <section id="concept-section" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight uppercase leading-tight mb-6">
            FROM CONCEPT
            <br />
            TO <span className="text-gradient">REALITY</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            The HydroChill bottle is an innovative concept currently in the prototype phase. We are passionately refining the technology and design to bring you the future of hydration.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
          >
            <Link href="/about">
              FOLLOW OUR JOURNEY
            </Link>
          </Button>
      </div>
    </section>
  );
}
