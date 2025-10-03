
'use client';

import * as React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const teamMembers = [
  {
    name: 'Alex Rivera',
    title: 'Founder & CEO',
    bio: 'An avid outdoors enthusiast with a background in environmental science, Alex founded HydroChill to combat the wastefulness of single-use plastics and make safe hydration accessible to all.',
    imageId: 'team-member-1',
  },
  {
    name: 'Ben Carter',
    title: 'Lead Engineer',
    bio: 'With over a decade of experience in micro-robotics and purification systems, Ben is the mastermind behind the UV-C technology that powers every HydroChill bottle.',
    imageId: 'team-member-2',
  },
  {
    name: 'Chloe Davis',
    title: 'Head of Design',
    bio: 'Chloe believes that functional items should also be beautiful. Her minimalist aesthetic and obsession with user experience are evident in every curve and interaction of the HydroChill bottle.',
    imageId: 'team-member-3',
  },
    {
    name: 'Maria Rodriguez',
    title: 'Marketing Lead',
    bio: 'Maria is a storyteller who crafts compelling narratives that connect with our audience, driving brand awareness and community engagement.',
    imageId: 'team-member-4',
  },
  {
    name: 'David Lee',
    title: 'Sustainability Officer',
    bio: 'David ensures that our products and processes are environmentally responsible, aligning our business goals with our commitment to the planet.',
    imageId: 'team-member-5',
  },
  {
    name: 'Sophia Chen',
    title: 'Lead App Developer',
    bio: 'Sophia leads the development of our mobile app, creating a seamless and intuitive user experience for tracking hydration and unlocking new features.',
    imageId: 'team-member-6',
  },
];

export default function TeamSection() {
   const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Meet the Innovators</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">The passionate minds turning the vision of perfect hydration into reality.</p>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-sm mx-auto sm:max-w-xl md:max-w-3xl lg:max-w-5xl"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {teamMembers.map((member, index) => {
              const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
              return (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                   <Card className="relative group overflow-hidden rounded-xl border-none shadow-lg">
                      {memberImage && (
                      <Image
                        src={memberImage.imageUrl}
                        alt={`Portrait of ${member.name}`}
                        data-ai-hint={memberImage.imageHint}
                        width={400}
                        height={400}
                        className="object-cover aspect-square transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-2xl font-bold font-headline text-white">{member.name}</h3>
                      <p className="text-primary font-semibold mt-1">{member.title}</p>
                      <p className="text-white/80 mt-4 text-sm">{member.bio}</p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            )})}
          </CarouselContent>
          <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 fill-background" />
          <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 fill-background" />
        </Carousel>
      </div>
    </section>
  );
}
