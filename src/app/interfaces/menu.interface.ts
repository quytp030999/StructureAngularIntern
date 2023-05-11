export interface IMenu {
  title: string;
  icon: string;
  isOpen: boolean;
  sub: Array<ISubMenu>;
}
export interface ISubMenu {
  name: string;
  routerLink: string;
}
