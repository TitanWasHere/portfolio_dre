import { defineCollection, z } from 'astro:content';

const schema = ({ image }) => z.object({
  title: z.string(),
  description: z.string(),
  images: z.array(image()),
  date: z.date(),
  category: z.string().default('photo'),
});

const photos = defineCollection({ type: 'content', schema });
const graphics = defineCollection({ type: 'content', schema });

export const collections = { photos, graphics };