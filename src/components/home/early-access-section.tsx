import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Mail, Send } from 'lucide-react';

export default function EarlyAccessSection() {
  return (
    <section id="early-access" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <Card className="max-w-3xl mx-auto text-center bg-card border-none shadow-2xl">
          <CardHeader>
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <CardTitle className="text-3xl font-extrabold tracking-tight sm:text-4xl font-headline">
              Be the First to <span className="text-gradient">Experience HydroChill</span>
            </CardTitle>
            <CardDescription className="mt-2 text-lg text-muted-foreground md:text-xl">
              Sign up to get exclusive updates and be the first to know when early prototypes are available for testing.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 text-center sm:text-left"
                required
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                Notify Me <Send className="ml-2" />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
