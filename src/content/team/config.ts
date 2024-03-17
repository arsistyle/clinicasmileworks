import { defineCollection, z } from "astro:content"

const teamCollection = defineCollection({
	schema: z.object({
		name: z.string(),
		position: z.string(),
		description: z.string(),
		image: z.string(),
		visible: z.boolean().default(true),
	}),
})

export const collections = {
	team: teamCollection,
}
