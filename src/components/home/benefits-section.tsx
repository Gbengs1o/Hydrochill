import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Smartphone, Thermometer } from 'lucide-react';

export default function BenefitsSection() {
  return (
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
  );
}