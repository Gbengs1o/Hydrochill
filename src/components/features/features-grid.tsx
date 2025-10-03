import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Gem, Shield, Smartphone, ThermometerSnowflake } from 'lucide-react';

const features = [
  {
    icon: <Shield className="h-8 w-8" />,
    title: 'UV-C Purification',
    description:
      'Neutralizes 99.9% of harmful bio-contaminants in 60 seconds. Enjoy pure water from any source, worry-free.',
  },
  {
    icon: <ThermometerSnowflake className="h-8 w-8" />,
    title: 'Temp-Lock Insulation',
    description:
      'Double-wall vacuum insulation keeps drinks cold for up to 24 hours or hot for 12 hours. The perfect temperature, guaranteed.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Smart Hydration Tracking',
    description:
      'A sensor in the cap tracks your intake and syncs with our app, providing personalized goals and reminders.',
  },
  {
    icon: <Gem className="h-8 w-8" />,
    title: 'Premium Materials',
    description:
      'Crafted from surgical-grade 18/8 stainless steel and BPA-free plastics for durability and a pure taste.',
  },
];

export default function FeaturesGrid() {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="text-center border-none shadow-lg bg-card hover:scale-105 transition-transform duration-300"
            >
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {feature.icon}
                </div>
                <CardTitle className="mt-4 text-2xl font-bold font-headline">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
