
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const conceptImage = PlaceHolderImages.find(p => p.id === 'product-shot');
const backgroundImage = PlaceHolderImages.find(p => p.id === 'concept-background');

export default function ConceptPhaseSection() {
  return (
    <section className="relative w-full py-24 md:py-32 lg:py-40 bg-card text-white">
      {backgroundImage && (
         <Image
            src={backgroundImage.imageUrl}
            alt={backgroundImage.description}
            data-ai-hint={backgroundImage.imageHint}
            fill
            className="object-cover"
          />
      )}
      <div className="absolute inset-0 bg-black/60 z-10" />
      <div className="container relative z-20 mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Left Side - Image */}
            {conceptImage && (
                <div className="flex justify-center">
                    <Image
                        src={conceptImage.imageUrl}
                        alt={conceptImage.description}
                        data-ai-hint={conceptImage.imageHint}
                        width={500}
                        height={500}
                        className="object-contain -mt-10 md:-mt-32"
                    />
                </div>
            )}
            
            {/* Right Side - Text Content */}
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight uppercase leading-tight mb-6">
                FROM CONCEPT
                <br />
                TO REALITY
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-md mx-auto md:mx-0">
                The HydroChill bottle is an innovative concept currently in the prototype phase. We are passionately refining the technology and design to bring you the future of hydration.
              </p>
              <Button 
                asChild 
                size="lg" 
                className="border-2 border-cyan-400 bg-cyan-400 text-black hover:bg-transparent hover:text-cyan-400 transition-all duration-300 px-8 py-3 text-sm font-semibold tracking-wider uppercase"
              >
                <Link href="/about">
                  FOLLOW OUR JOURNEY
                </Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
