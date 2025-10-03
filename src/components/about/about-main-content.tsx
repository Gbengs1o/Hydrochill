
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const aboutImage = PlaceHolderImages.find(p => p.id === 'about-us');

export default function AboutMainContent() {
  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-start">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Our Mission</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                To empower individuals to lead healthier, more sustainable lives by providing access to pure, great-tasting water anytime, anywhere. We believe that superior technology and thoughtful design can solve the fundamental challenges of modern hydration, making it simple, safe, and deeply satisfying. We're not just creating a product; we're fostering a community dedicated to wellness and environmental responsibility.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">The HydroChill Story</h2>
              <p className="mt-6 text-muted-foreground leading-relaxed text-lg">
                Born from a desire to merge cutting-edge technology with everyday wellness, HydroChill started as a simple idea: what if your water bottle could do more? Our founders, a team of passionate engineers, designers, and health advocates, were tired of single-use plastics and questionably clean reusable bottles. They envisioned a product that not only kept water cold but also purified it on the go, creating a truly seamless and worry-free hydration experience. After years of relentless research, prototyping, and user testing in the most demanding environments, the HydroChill smart bottle was born—a testament to our commitment to innovation and quality.
              </p>
            </div>
          </div>
          {aboutImage && (
            <div className="flex justify-center items-center sticky top-24">
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={400}
                className="rounded-xl object-cover shadow-2xl"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
