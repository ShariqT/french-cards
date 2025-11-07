import { defineCollection, z } from 'astro:content';
import { file } from 'astro/loaders';
const ep167 = defineCollection({ 
  loader: file("src/ep167/ep167.json"),
  schema: z.object({
      id: z.number(),
      front: z.string(),
      back: z.string()
    })
});
export const collections = { ep167 };
