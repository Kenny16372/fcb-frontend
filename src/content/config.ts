import { z, defineCollection } from "astro:content";
import { WidgetType } from "src/components/Widget.astro";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      coach: z.string(),
      photo: image().optional(),
      widget: z.nativeEnum(WidgetType).optional(),
    }),
});

export const collections = {
  teams: teamCollection,
};
