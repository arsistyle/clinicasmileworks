import { TbBrandWhatsapp, TbCalendarPlus } from "react-icons/tb"
import type { ButtonProps } from "@/components/core/Button/types"

export const DATING_URL = "https://ff.healthatom.io/I1FQmD"
export const DATING_NUMBER = "56950413044"

export const CDN_URL = "https://pub-7c20c4f95be84fcfa35c2ca966f8fb0d.r2.dev/clinica-smile-works"

interface ButtonsProps {
	name: string
	label: string
	iconLeft?: any
	iconRight?: any
	props?: ButtonProps
}

export const FLOATING_BUTTONS: ButtonsProps[] = [
	{
		iconLeft: TbBrandWhatsapp,
		label: "WhatsApp",
		name: "whatsapp",
		props: {
			color: "whatsapp",
			href: `https://wa.me/${DATING_NUMBER}`,
			rel: "noopener noreferrer",
			tag: "a",
			target: "_blank",
			title: "WhatsApp",
			variant: "filled",
		},
	},
	{
		iconLeft: TbCalendarPlus,
		label: "Cita Online",
		name: "date",
		props: {
			color: "primary",
			href: DATING_URL,
			rel: "noopener noreferrer",
			tag: "a",
			target: "_blank",
			title: "Cita Online",
			variant: "filled",
		},
	},
]

export * from "./navLinks"
