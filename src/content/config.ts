import { z, defineCollection } from "astro:content";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      coach: z.string(),
      photo: image().optional(),
      widget: z.string().optional(),
    }),
});

export const collections = {
  teams: teamCollection,
};
