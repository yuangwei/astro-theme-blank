import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),
      draft: z.boolean().default(false),
    }),
})

const page = defineCollection({
  type: "content",
  schema: () =>
    z.object({
      title: z.string().max(60),
      description: z.string().min(50).max(160),
      draft: z.boolean().default(false),
    }),
})


export const collections = { blog, page };
