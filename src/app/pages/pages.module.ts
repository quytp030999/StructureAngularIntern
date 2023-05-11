import { LineChartComponent } from "./../components/child/line-chart/line-chart.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { NzMenuModule } from "ng-zorro-antd/menu";
import { NzLayoutModule } from "ng-zorro-antd/layout";
import { IconsProviderModule } from "./../icons-provider.module";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { CreateUserComponent } from "./user/create-user/create-user.component";
import { ListUserComponent } from "./user/list-user/list-user.component";

@NgModule({
  declarations: [
    PagesComponent,
    WelcomeComponent,
    LineChartComponent,
    CreateUserComponent,
    ListUserComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
  ],
})
export class PagesModule {}
