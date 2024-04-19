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
		visible: true,
		group: ["header"],
	},
	{
		label: "Tratamientos",
		name: "tratamientos",
		href: "/tratamientos",
		visible: true,
		group: ["header", "footer"],
		children: [
			{
				name: "ortodoncia",
				label: "Ortodoncia",
				href: "/tratamientos/ortodoncia",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "estetica-dental--rehabilitacion-oral",
				label: "Estética dental / Rehabilitación oral",
				href: "/tratamientos/estetica-dental--rehabilitacion-oral",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "periodoncia",
				label: "Periodoncia",
				href: "/tratamientos/periodoncia",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "implantologia",
				label: "Implantologiía",
				href: "/tratamientos/implantologia",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "odontopediatria",
				label: "Odontopediatría",
				href: "/tratamientos/odontopediatria",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "kinesiologia-maxilofacial",
				label: "Kinesiologia Maxilofacial",
				href: "/tratamientos/kinesiologia-maxilofacial",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "tratamientos-multidisciplinarios",
				label: "Tratamientos Multidisciplinarios",
				href: "/tratamientos/tratamientos-multidisciplinarios",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "apena-del-sueno",
				label: "Apena del sueño",
				href: "/tratamientos/apena-del-sueno",
				visible: true,
				group: ["header", "footer"],
			},
		],
	},
	{
		name: "ortodoncia-invisible",
		label: "Ortodoncia Invisible",
		href: "/ortodoncia-invisible",
		visible: true,
		group: ["header", "footer"],
		children: [
			{
				name: "que-es-la-ortodoncia-invisible",
				label: "¿Qué es la Ortodoncia Invisible?",
				href: "/ortodoncia-invisible#ortodoncia-invisible",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "cuidados-ortodoncia-invisible",
				label: "Cuidados Ortodoncia Invisible",
				href: "/ortodoncia-invisible#cuidados-ortodoncia-invisible",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "tu-primera-visita",
				label: "Tu primera visita",
				href: "/ortodoncia-invisible#tu-primera-visita",
				visible: true,
				group: ["header", "footer"],
			},
		],
	},
	{
		name: "casos",
		label: "Casos",
		href: "/casos",
		visible: true,
		group: ["header", "footer"],
		children: [
			{
				name: "testimonios",
				label: "Testimonios",
				href: "/casos/testimonios",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "casos-clinicos",
				label: "Casos clínicos",
				href: "/casos/casos-clinicos",
				visible: true,
				group: ["header", "footer"],
			},
		],
	},
	{
		name: "la-clinica",
		label: "La Clinica",
		href: "/la-clinica",
		visible: true,
		group: ["header", "footer"],
		children: [
			{
				name: "el-equipo",
				label: "El equipo",
				href: "/la-clinica/el-equipo",
				visible: true,
				group: ["header", "footer"],
			},
			{
				name: "instalaciones",
				label: "Instalaciones",
				href: "/la-clinica/instalaciones",
				visible: true,
				group: ["header", "footer"],
			},
		],
	},
]
