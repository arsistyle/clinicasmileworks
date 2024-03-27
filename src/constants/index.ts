import type { NavItem } from "./types"

export const DATING_URL = "https://ff.healthatom.io/I1FQmD"
export const DATING_NUMBER = "56950413044"

/*
  - Inicio
  - Tratamientos
    - Ortodoncia
    - Estética dental / Rehabilitación oral
    - Periodoncia
    - Implantes dentales
    - Implantes carga inmediata
    - Odontopediatría
    - Odontología
    - Apnea del sueño
    - Cirugía
    - Sedación
    - Fisioterapia
  - Ortodoncia Invisible
    - ¿Qué es la Ortodoncia Invisible?
	- Cuidados Ortodoncia Invisible
	- Ortodoncia acelerada
	- Tu primera visita
  - Casos
    - Testimonios
    - Identifica tu caso
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
				name: "implantes-dentales",
				label: "Implantes dentales",
				href: "/tratamientos/implantes-dentales",
			},
			{
				name: "implantes-carga-inmediata",
				label: "Implantes carga inmediata",
				href: "/tratamientos/implantes-carga-inmediata",
			},
			{
				name: "odontopediatria",
				label: "Odontopediatría",
				href: "/tratamientos/odontopediatria",
			},
			{
				name: "odontologia",
				label: "Odontología",
				href: "/tratamientos/odontologia",
			},
			{
				name: "apnea-del-sueno",
				label: "Apnea del sueño",
				href: "/tratamientos/apnea-del-sueno",
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
				name: "ortodoncia-acelerada",
				label: "Ortodoncia acelerada",
				href: "/ortodoncia-invisible#ortodoncia-acelerada",
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
				name: "identifica-tu-caso",
				label: "Identifica tu caso",
				href: "/casos/identifica-tu-caso",
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
