import { ListUserComponent } from './user/list-user/list-user.component';
import { CreateUserComponent } from './user/create-user/create-user.component';
import { WelcomeComponent } from "./welcome/welcome.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "welcome",
        component: WelcomeComponent,
      },
      {
        path: 'create-user',
        component: CreateUserComponent
      },
      {
        path: 'list-user',
        component: ListUserComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
