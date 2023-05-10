import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "login",
    loadChildren: () =>
      import("./components/login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "home",
    loadChildren: () =>
      import("./components/home/home.module").then((m) => m.HomeModule),
  },
  { path: "", pathMatch: "full", redirectTo: "/login" },
  { path: "**", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
