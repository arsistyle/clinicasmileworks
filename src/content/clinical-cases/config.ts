import { defineCollection, z } from "astro:content"

const clinicalCasesCollection = defineCollection({
	schema: z.object({
		id: z.string(),
		title: z.string(),
		position: z.string(),
		description: z.string(),
		images: z.object({
			before: z.string(),
			after: z.string(),
		}),
		visible: z.boolean().default(true),
	}),
})

export const collections = {
	"clinical-cases": clinicalCasesCollection,
}
