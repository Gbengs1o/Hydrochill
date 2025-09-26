import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Droplets, ThermometerSun, Zap } from 'lucide-react';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const productShotImage = PlaceHolderImages.find(p => p.id === 'product-shot');

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center text-white overflow-hidden">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 w-full h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center h-full gap-8 animate-fade-in-up">
          <div className="text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight uppercase">
              Hydrochill:
              <br />
              The Future
              <br />
              of Hydration
            </h1>
            <p className="max-w-md text-lg text-primary-foreground/80">
              Experience unparalleled temperature control and elegant design.
            </p>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href="/features">
                Explore Features
              </Link>
            </Button>
          </div>
          <div className="flex flex-col items-center justify-center space-y-8">
            {productShotImage && (
              <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
                  <Image
                    src={productShotImage.imageUrl}
                    alt={productShotImage.description}
                    data-ai-hint={productShotImage.imageHint}
                    fill
                    className="object-contain"
                  />
              </div>
            )}
            <div className="flex justify-center items-center gap-8 md:gap-12">
                <div className="flex flex-col items-center text-center">
                    <ThermometerSun className="h-8 w-8 text-primary" />
                    <p className="mt-2 text-sm">Precision<br/>Temperature</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Zap className="h-8 w-8 text-primary" />
                    <p className="mt-2 text-sm">All-Day Charge</p>
                </div>
                <div className="flex flex-col items-center text-center">
                    <Droplets className="h-8 w-8 text-primary" />
                    <p className="mt-2 text-sm">Durable Design</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}