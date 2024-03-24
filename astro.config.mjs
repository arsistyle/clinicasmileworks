import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), react()],
	redirects: {
		"casos": "/casos/testimonios",
		"tratamientos": "/tratamientos/ortodoncia",
		"la-clinica": "/la-clinica/el-equipo",
	},
})
