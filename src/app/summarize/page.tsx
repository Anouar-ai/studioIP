import { SummarizeForm } from './SummarizeForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Article Summarizer | StreamWise IPTV Guide',
  description: 'Summarize any IPTV article with our AI-powered tool.',
};

export default function SummarizePage() {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold font-headline text-primary">IPTV Article Summarizer</h1>
        <p className="mt-4 text-lg text-muted-foreground">
            Enter the URL of any IPTV guide or article, and our AI will provide a concise summary of the key points, helping you save time and get straight to the facts.
        </p>
        </div>
        <SummarizeForm />
    </div>
  );
}
