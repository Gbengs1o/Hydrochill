import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Beaker } from 'lucide-react';

export default function ConceptPhaseSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container text-center">
        <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-primary/10 text-primary">
                <Beaker className="h-8 w-8" />
            </div>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl font-headline">
          From <span className="text-gradient">Concept</span> to Reality
        </h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
          The HydroChill bottle is an innovative concept currently in the prototype phase. We are passionately refining the technology and design to bring you the future of hydration.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/about">
              Follow Our Journey <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
