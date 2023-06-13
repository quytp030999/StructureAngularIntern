import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { IconsProviderModule } from '../icons-provider.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    PagesComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FormsModule,
    HttpClientModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ]
})
export class PagesModule { }
