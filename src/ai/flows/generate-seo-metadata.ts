'use server';

/**
 * @fileOverview AI-powered SEO metadata generator for product pages.
 *
 * - generateSeoMetadata - A function that generates SEO meta title and description.
 * - GenerateSeoMetadataInput - The input type for the generateSeoMetadata function.
 * - GenerateSeoMetadataOutput - The return type for the generateSeoMetadata function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateSeoMetadataInputSchema = z.object({
  productName: z.string().describe('The name of the product.'),
  productDescription: z.string().describe('A detailed description of the product.'),
  productCategory: z.string().describe('The category the product belongs to.'),
  keyFeatures: z.string().describe('Key features of the product in comma seperated format.'),
});
export type GenerateSeoMetadataInput = z.infer<typeof GenerateSeoMetadataInputSchema>;

const GenerateSeoMetadataOutputSchema = z.object({
  metaTitle: z.string().describe('SEO-friendly meta title for the product page.'),
  metaDescription: z.string().describe('SEO-friendly meta description for the product page.'),
});
export type GenerateSeoMetadataOutput = z.infer<typeof GenerateSeoMetadataOutputSchema>;

export async function generateSeoMetadata(input: GenerateSeoMetadataInput): Promise<GenerateSeoMetadataOutput> {
  return generateSeoMetadataFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateSeoMetadataPrompt',
  input: {schema: GenerateSeoMetadataInputSchema},
  output: {schema: GenerateSeoMetadataOutputSchema},
  prompt: `You are an SEO expert specializing in creating compelling meta titles and descriptions for e-commerce product pages.

  Generate an SEO-friendly meta title and description based on the following product information. The meta title should be concise (under 60 characters) and include the product name and key selling points. The meta description should be engaging (under 160 characters) and highlight the benefits of the product.

  Product Name: {{{productName}}}
  Product Description: {{{productDescription}}}
  Product Category: {{{productCategory}}}
  Key Features: {{{keyFeatures}}}

  Ensure that the meta title and description are optimized for search engines and will attract potential customers to click on the product page. The key features should be weaved into the title and description naturally.

  Output the meta title and description in a JSON format.
`,
});

const generateSeoMetadataFlow = ai.defineFlow(
  {
    name: 'generateSeoMetadataFlow',
    inputSchema: GenerateSeoMetadataInputSchema,
    outputSchema: GenerateSeoMetadataOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
