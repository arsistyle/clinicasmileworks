type groupType = "header" | "footer"

export interface NavItem {
	name: string
	href: string
	label?: string
	children?: NavItem[]
	visible?: boolean
	group?: groupType[]
}
