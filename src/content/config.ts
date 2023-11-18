import { z, defineCollection } from "astro:content";
import WidgetType from "src/components/WidgetType";

const teamCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      year: z.string().optional(),
      yearNavigation: z.string().optional(),
      coaches: z
        .array(
          z.object({ name: z.string(), email: z.string().email().optional() }),
        )
        .optional(),
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
