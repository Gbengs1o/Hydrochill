import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { VisualShowcase } from '@/components/visual-showcase';
import { Check, Gem, ShieldZap, Smartphone, ThermometerSnowflake, X } from 'lucide-react';

const features = [
  {
    icon: <ShieldZap className="h-8 w-8" />,
    title: 'UV-C Purification',
    description: 'Neutralizes 99.9% of harmful bio-contaminants in 60 seconds. Enjoy pure water from any source, worry-free.',
  },
  {
    icon: <ThermometerSnowflake className="h-8 w-8" />,
    title: 'Temp-Lock Insulation',
    description: 'Double-wall vacuum insulation keeps drinks cold for up to 24 hours or hot for 12 hours. The perfect temperature, guaranteed.',
  },
  {
    icon: <Smartphone className="h-8 w-8" />,
    title: 'Smart Hydration Tracking',
    description: 'A sensor in the cap tracks your intake and syncs with our app, providing personalized goals and reminders.',
  },
  {
    icon: <Gem className="h-8 w-8" />,
    title: 'Premium Materials',
    description: 'Crafted from surgical-grade 18/8 stainless steel and BPA-free plastics for durability and a pure taste.',
  },
];

export default function FeaturesPage() {
  return (
    <div className="animate-fade-in-up">
      {/* Page Header */}
      <section className="bg-muted/30">
        <div className="container px-4 md:px-6 py-16 md:py-24 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-headline">
            Unparalleled <span className="text-gradient">Innovation</span>
          </h1>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
            Discover the technology that sets HydroChill apart from any bottle you've ever owned.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center border-none shadow-lg bg-card hover:scale-105 transition-transform duration-300">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="mt-4 text-2xl font-bold font-headline">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Chart */}
      <section className="py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-extrabold text-center tracking-tight sm:text-4xl md:text-5xl font-headline mb-12">
            The HydroChill Advantage
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[40%] text-lg">Feature</TableHead>
                    <TableHead className="text-center text-lg">Regular Bottle</TableHead>
                    <TableHead className="text-center text-lg text-gradient font-bold">HydroChill</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Self-Purification (UV-C)</TableCell>
                    <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">24hr Cold Insulation</TableCell>
                    <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Hydration Tracking</TableCell>
                    <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Prevents Odor & Mold</TableCell>
                    <TableCell className="text-center"><X className="mx-auto text-destructive" /></TableCell>
                    <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Surgical-Grade Steel</TableCell>
                    <TableCell className="text-center text-muted-foreground">Varies</TableCell>
                    <TableCell className="text-center"><Check className="mx-auto text-primary" /></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
       <section className="py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <VisualShowcase />
        </div>
       </section>

    </div>
  );
}
