import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  { path: "", pathMatch: "full", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
