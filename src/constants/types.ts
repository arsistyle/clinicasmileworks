export interface NavItem {
  name: string;
  href: string;
  label?: string;
  children?: NavItem[];
}
