import type { NavItem } from "./types"

/*
  - Inicio
  - Tratamientos
    - Ortodoncia
    - Estética dental / Rehabilitación oral
    - Periodoncia
    - Implantología
	- Odontopediatría
	- Kinesiología maxilofacial
	- Tratamientos multidisciplinarios
	- Apena del sueño
  - Ortodoncia Invisible
    - ¿Qué es la Ortodoncia Invisible?
	- Cuidados Ortodoncia Invisible
	- Ortodoncia acelerada
	- Tu primera visita
  - Casos
    - Testimonios
    - Casos clínicos
  - La clínica
    - El equipo
    - Instalaciones
 */

export const NAV_ITEMS: NavItem[] = [
	{
		name: "home",
		label: "Inicio",
		href: "/",
	},
	{
		label: "Tratamientos",
		name: "tratamientos",
		href: "/tratamientos",
		children: [
			{
				name: "ortodoncia",
				label: "Ortodoncia",
				href: "/tratamientos/ortodoncia",
			},
			{
				name: "estetica-dental--rehabilitacion-oral",
				label: "Estética dental / Rehabilitación oral",
				href: "/tratamientos/estetica-dental--rehabilitacion-oral",
			},
			{
				name: "periodoncia",
				label: "Periodoncia",
				href: "/tratamientos/periodoncia",
			},
			{
				name: "implantologia",
				label: "Implantologiía",
				href: "/tratamientos/implantologia",
			},
			{
				name: "odontopediatria",
				label: "Odontopediatría",
				href: "/tratamientos/odontopediatria",
			},
			{
				name: "kinesiologia-maxilofacial",
				label: "Kinesiologia Maxilofacial",
				href: "/tratamientos/kinesiologia-maxilofacial",
			},
			{
				name: "tratamientos-multidisciplinarios",
				label: "Tratamientos Multidisciplinarios",
				href: "/tratamientos/tratamientos-multidisciplinarios",
			},
			{
				name: "apena-del-sueno",
				label: "Apena del sueño",
				href: "/tratamientos/apena-del-sueno",
			},
		],
	},
	{
		name: "ortodoncia-invisible",
		label: "Ortodoncia Invisible",
		href: "/ortodoncia-invisible",
		children: [
			{
				name: "que-es-la-ortodoncia-invisible",
				label: "¿Qué es la Ortodoncia Invisible?",
				href: "/ortodoncia-invisible#ortodoncia-invisible",
			},
			{
				name: "cuidados-ortodoncia-invisible",
				label: "Cuidados Ortodoncia Invisible",
				href: "/ortodoncia-invisible#cuidados-ortodoncia-invisible",
			},
			{
				name: "tu-primera-visita",
				label: "Tu primera visita",
				href: "/ortodoncia-invisible#tu-primera-visita",
			},
		],
	},
	{
		name: "casos",
		label: "Casos",
		href: "/casos",
		children: [
			{
				name: "testimonios",
				label: "Testimonios",
				href: "/casos/testimonios",
			},
			{
				name: "casos-clinicos",
				label: "Casos clínicos",
				href: "/casos/casos-clinicos",
			},
		],
	},
	{
		name: "la-clinica",
		label: "La Clinica",
		href: "/la-clinica",
		children: [
			{
				name: "el-equipo",
				label: "El equipo",
				href: "/la-clinica/el-equipo",
			},
			{
				name: "instalaciones",
				label: "Instalaciones",
				href: "/la-clinica/instalaciones",
			},
		],
	},
]
