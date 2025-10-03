
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

export default function AboutContent() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline">Our Mission</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                To empower individuals to lead healthier lives by providing access to pure, great-tasting water anytime, anywhere. We believe that superior technology and thoughtful design can solve the fundamental challenges of hydration, making it simple, safe, and sustainable.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline">The HydroChill Story</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Born from a desire to merge cutting-edge technology with everyday wellness, HydroChill started as a simple idea: what if your water bottle could do more? Our founders, a team of engineers and designers, were tired of single-use plastics and questionably clean reusable bottles. They envisioned a product that not only kept water cold but also purified it on the go, creating a truly seamless and worry-free hydration experience. After years of research and development, the HydroChill smart bottle was born.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline">Our Vision for the Future</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We see a future where clean water is not a luxury, but a standard. HydroChill is just the beginning. We are committed to expanding our ecosystem of smart hydration products, pushing the boundaries of innovation to promote global health and reduce environmental impact. We're not just building a brand; we're building a movement towards a healthier planet and healthier people.
              </p>
            </div>
          </div>
          {aboutImage && (
            <div className="flex justify-center">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="rounded-xl object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
