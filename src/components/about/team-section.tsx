
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

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
];

export default function TeamSection() {
  return (
    <section className="py-12 md:py-24 bg-card">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Meet the Innovators</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">The passionate minds turning the vision of perfect hydration into reality.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => {
            const memberImage = PlaceHolderImages.find(p => p.id === member.imageId);
            return (
              <Card key={member.name} className="text-center border-none shadow-lg bg-background hover:scale-105 transition-transform duration-300">
                <CardHeader className="items-center">
                  {memberImage && (
                    <Image
                      src={memberImage.imageUrl}
                      alt={`Portrait of ${member.name}`}
                      data-ai-hint={memberImage.imageHint}
                      width={120}
                      height={120}
                      className="rounded-full object-cover"
                    />
                  )}
                  <CardTitle className="mt-4 text-2xl font-bold font-headline">{member.name}</CardTitle>
                  <p className="text-primary font-semibold">{member.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.bio}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
