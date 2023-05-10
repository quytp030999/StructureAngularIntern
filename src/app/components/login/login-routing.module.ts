import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginPageComponent } from "./login-page/login-page.component";

const routes: Routes = [
  {
    path: "",
    component: LoginPageComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
