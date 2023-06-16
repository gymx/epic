import { z, defineCollection } from "astro:content";
const postsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

const newslettersCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    pubDate: z.date(),
    tags: z.array(z.string()),
    image: z.string().optional(),
  }),
});

export const collections = {
  posts: postsCollection,
  newsletters: newslettersCollection,
};
