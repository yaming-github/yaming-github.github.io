import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      company: z.string(),
      logo: image(),
      title: z.string(),
      location: z.string(),
      start: z.string(),
      end: z.string().nullable().default(null),
      displayDate: z.string().optional(),
      architectureImage: image().optional(),
      order: z.number(),
    }),
})

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: ({ image }) =>
    z.object({
      school: z.string(),
      logo: image(),
      logoHeight: z.number().default(32),
      degree: z.string(),
      location: z.string(),
      start: z.string(),
      end: z.string(),
      order: z.number(),
    }),
})

const publications = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/publications' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),
    url: z.string().url(),
    date: z.string(),
    order: z.number(),
  }),
})

export const collections = { work, education, publications }
