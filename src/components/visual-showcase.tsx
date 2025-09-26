"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getVisualRecommendation } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Lightbulb, Loader2, Terminal } from 'lucide-react';

const initialState = {
  visualType: '',
  rationale: '',
  additionalNotes: '',
  error: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} size="lg">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Analyzing...
        </>
      ) : (
        <>
          <Lightbulb className="mr-2 h-5 w-5" />
          Generate Visual Recommendation
        </>
      )}
    </Button>
  );
}

export function VisualShowcase() {
  const [state, formAction] = useFormState(getVisualRecommendation, initialState);

  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl font-headline">
        AI-Powered <span className="text-gradient">Visual Strategy</span>
      </h2>
      <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground md:text-xl">
        Curious about the best way to showcase HydroChill's cutting-edge features? Let our AI analyze the product specs and suggest the most impactful visual representation.
      </p>
      <div className="mt-8">
        <form action={formAction}>
          <SubmitButton />
        </form>
      </div>

      <div className="mt-12 text-left">
        {state?.error && (
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.error}</AlertDescription>
          </Alert>
        )}
        {state?.visualType && !state.error && (
           <Card className="animate-fade-in-up shadow-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Lightbulb className="h-6 w-6 text-primary" />
                AI Recommendation: <span className='text-gradient'>{state.visualType}</span>
              </CardTitle>
              <CardDescription>Based on product data, here is the optimal visual strategy.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Rationale</h4>
                <p className="text-muted-foreground">{state.rationale}</p>
              </div>
              {state.additionalNotes && (
                 <div>
                  <h4 className="font-semibold text-lg">Additional Notes</h4>
                  <p className="text-muted-foreground">{state.additionalNotes}</p>
                </div>
              )}
            </CardContent>
           </Card>
        )}
      </div>
    </div>
  );
}
