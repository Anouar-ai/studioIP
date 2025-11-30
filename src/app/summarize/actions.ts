'use server';

import { summarizeIptvArticle } from '@/ai/flows/summarize-iptv-article';
import { z } from 'zod';

const schema = z.object({
  url: z.string().url({ message: 'Please enter a valid URL.' }),
});

export type FormState = {
  message: string;
  summary: string;
  url: string;
};

export async function getSummary(prevState: FormState, formData: FormData): Promise<FormState> {
  const url = formData.get('url') as string;
  const validatedFields = schema.safeParse({ url });

  if (!validatedFields.success) {
    return {
      message: validatedFields.error.flatten().fieldErrors.url?.[0] || 'Invalid input.',
      summary: '',
      url: url,
    };
  }

  try {
    const result = await summarizeIptvArticle({ articleUrl: validatedFields.data.url });
    return {
      message: 'Summary generated successfully.',
      summary: result.summary,
      url: validatedFields.data.url,
    };
  } catch (error) {
    console.error(error);
    return {
      message: 'An error occurred while generating the summary. The AI model may be unable to access the URL.',
      summary: '',
      url: url,
    };
  }
}
