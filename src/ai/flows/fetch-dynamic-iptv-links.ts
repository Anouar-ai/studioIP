'use server';

/**
 * @fileOverview A Genkit flow to dynamically fetch the best IPTV provider links.
 *
 * - fetchDynamicIptvLinks - A function that returns a list of current top IPTV options.
 * - DynamicIptvLinksOutput - The output type for the fetchDynamicIptvLinks function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const DynamicIptvLinksOutputSchema = z.array(z.string().url()).describe('A list of URLs for top IPTV providers.');
export type DynamicIptvLinksOutput = z.infer<typeof DynamicIptvLinksOutputSchema>;

export async function fetchDynamicIptvLinks(): Promise<DynamicIptvLinksOutput> {
  return fetchDynamicIptvLinksFlow();
}

const fetchIptvLinksPrompt = ai.definePrompt({
  name: 'fetchIptvLinksPrompt',
  prompt: `You are an expert in identifying top IPTV providers. Your task is to provide a list of URLs that link to the best and most reliable IPTV services available as of today. Focus on providers that offer a wide range of channels, excellent streaming quality, and positive user reviews.  The list should be comprehensive and up-to-date. Only return the urls in an array.

      Example:
      [
        "https://www.exampleiptv1.com",
        "https://www.exampleiptv2.net",
        "https://www.exampleiptv3.org"
      ]
  `,
  output: {schema: DynamicIptvLinksOutputSchema},
});

const fetchDynamicIptvLinksFlow = ai.defineFlow(
  {
    name: 'fetchDynamicIptvLinksFlow',
    outputSchema: DynamicIptvLinksOutputSchema,
  },
  async () => {
    const {output} = await fetchIptvLinksPrompt();
    return output!;
  }
);
