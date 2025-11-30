'use server';

/**
 * @fileOverview Summarizes an IPTV guide article from a given URL.
 *
 * - summarizeIptvArticle - A function that takes a URL and returns a summarized overview of the article.
 * - SummarizeIptvArticleInput - The input type for the summarizeIptvArticle function, which is a URL string.
 * - SummarizeIptvArticleOutput - The return type for the summarizeIptvArticle function, which is a summary string.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeIptvArticleInputSchema = z.object({
  articleUrl: z.string().describe('The URL of the IPTV guide article to summarize.'),
});
export type SummarizeIptvArticleInput = z.infer<typeof SummarizeIptvArticleInputSchema>;

const SummarizeIptvArticleOutputSchema = z.object({
  summary: z.string().describe('A summarized overview of the IPTV guide article.'),
});
export type SummarizeIptvArticleOutput = z.infer<typeof SummarizeIptvArticleOutputSchema>;

export async function summarizeIptvArticle(input: SummarizeIptvArticleInput): Promise<SummarizeIptvArticleOutput> {
  return summarizeIptvArticleFlow(input);
}

const summarizeIptvArticlePrompt = ai.definePrompt({
  name: 'summarizeIptvArticlePrompt',
  input: {schema: SummarizeIptvArticleInputSchema},
  output: {schema: SummarizeIptvArticleOutputSchema},
  prompt: `You are an expert summarizer. Please provide a concise overview of the IPTV guide article found at the following URL: {{{articleUrl}}}. Focus on the main recommendations and setup instructions.`,
});

const summarizeIptvArticleFlow = ai.defineFlow(
  {
    name: 'summarizeIptvArticleFlow',
    inputSchema: SummarizeIptvArticleInputSchema,
    outputSchema: SummarizeIptvArticleOutputSchema,
  },
  async input => {
    const {output} = await summarizeIptvArticlePrompt(input);
    return output!;
  }
);
