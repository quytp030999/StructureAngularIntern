import { Component } from "@angular/core";
import { IMenu } from "../interfaces/menu.interface";

@Component({
  selector: "app-pages",
  templateUrl: "./pages.component.html",
  styleUrls: ["./pages.component.scss"],
})
export class PagesComponent {
  isCollapsed = false;

  menu: Array<IMenu> = [
    {
      title: "dashboard",
      icon: "dashboard",
      isOpen: true,
      sub: [
        {
          name: "Welcome",
          routerLink: "/pages/welcome",
        },
        {
          name: "Create User",
          routerLink: "/pages/create-user",
        },
        {
          name: "List User",
          routerLink: "/pages/list-user",
        },
      ],
    },
    {
      title: "Form",
      icon: "form",
      isOpen: false,
      sub: [
        {
          name: "Basic Form",
          routerLink: "/form/basic-form",
        },
      ],
    },
  ];
}
