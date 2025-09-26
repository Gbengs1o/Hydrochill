import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShieldCheck, Smartphone, Thermometer, Zap, Droplets, ThermometerSun } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const heroImage = PlaceHolderImages.find(p => p.id === 'hero');
const productShotImage = PlaceHolderImages.find(p => p.id === 'product-shot');

export default function Home() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        {/* Hero Section */}
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


        {/* Benefits Section */}
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <ShieldCheck className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold font-headline">Pure Water, Always</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Our revolutionary UV-C purification system eliminates 99.9% of germs, viruses, and bacteria at the touch of a button.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Thermometer className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold font-headline">Perfect Temperature</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Keeps your drinks ice-cold for 24 hours or piping hot for 12, thanks to our advanced vacuum insulation.
                  </p>
                </CardContent>
              </Card>
              <Card className="text-center border-none shadow-none bg-transparent">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Smartphone className="h-8 w-8" />
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold font-headline">Stay Connected</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Sync with the HydroChill app to track your intake, set goals, and get personalized hydration reminders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Product Intro Section */}
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
              {productShotImage && (
                <Image
                  src={productShotImage.imageUrl}
                  alt={productShotImage.description}
                  data-ai-hint={productShotImage.imageHint}
                  width={400}
                  height={400}
                  className="rounded-xl object-contain animate-fade-in-up"
                />
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
