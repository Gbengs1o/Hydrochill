import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Check, X } from 'lucide-react';

export default function ComparisonChart() {
  return (
    <section className="py-12 md:py-24 bg-card">
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
                  <TableHead className="text-center text-lg">
                    Regular Bottle
                  </TableHead>
                  <TableHead className="text-center text-lg text-gradient font-bold">
                    HydroChill
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">
                    Self-Purification (UV-C)
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-destructive" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    24hr Cold Insulation
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-destructive" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Hydration Tracking
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-destructive" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Prevents Odor & Mold
                  </TableCell>
                  <TableCell className="text-center">
                    <X className="mx-auto text-destructive" />
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-primary" />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">
                    Surgical-Grade Steel
                  </TableCell>
                  <TableCell className="text-center text-muted-foreground">
                    Varies
                  </TableCell>
                  <TableCell className="text-center">
                    <Check className="mx-auto text-primary" />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </div>
      </div>
    </section>
  );
}
