import { z, defineCollection } from "astro:content";
import WidgetType from "src/components/WidgetType";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      coach: z.string(),
      photo: image().optional(),
      order: z.number().optional(),
      times: z.string().optional(),
      place: z.string().optional(),
      widget: z.nativeEnum(WidgetType).optional(),
    }),
});

const sponsorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      homepage: z.string(),
      logo: image().optional(),
      text: z.string(),
    }),
});

export const collections = {
  teams: teamCollection,
  sponsors: sponsorCollection,
};
