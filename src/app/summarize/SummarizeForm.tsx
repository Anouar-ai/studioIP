'use client';

import { useFormState, useFormStatus } from 'react-dom';
import type { FormState } from './actions';
import { getSummary } from './actions';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Loader2, Wand2 } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

const initialState: FormState = {
  message: '',
  summary: '',
  url: ''
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Summarize
    </Button>
  );
}

export function SummarizeForm() {
  const [state, formAction] = useFormState(getSummary, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.message !== 'Summary generated successfully.') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <div className="max-w-3xl mx-auto mt-12">
      <Card>
        <CardHeader>
            <CardTitle>Article Summarizer</CardTitle>
            <CardDescription>Enter a URL to get an AI-powered summary.</CardDescription>
        </CardHeader>
        <CardContent>
            <form action={formAction} className="flex flex-col sm:flex-row gap-2">
                <Input name="url" placeholder="https://example.com/iptv-guide" required className="flex-grow" type="url" />
                <SubmitButton />
            </form>
        </CardContent>
      </Card>
      
      {state.summary && (
        <Alert className="mt-8">
            <Wand2 className="h-4 w-4" />
            <AlertTitle className="font-bold">Summary for: {state.url}</AlertTitle>
            <AlertDescription className="mt-4 text-base whitespace-pre-wrap">
                {state.summary}
            </AlertDescription>
        </Alert>
      )}
    </div>
  );
}
