import { defineCollection, z } from "astro:content"

const testimonialsCollection = defineCollection({
	schema: z.object({
		name: z.string(),
		slug: z.string(),
		quote: z.string(),
		image: z.string(),
		visible: z.boolean().default(true),
	}),
})

export const collections = {
	testimonials: testimonialsCollection,
}
