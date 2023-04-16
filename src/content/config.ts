import { z, defineCollection } from "astro:content";

const teamCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    coach: z.string(),
  }),
});

export const collection = {
  teams: teamCollection,
};
