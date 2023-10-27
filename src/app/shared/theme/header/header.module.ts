import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {LocalizeRouterModule} from "@gilsdav/ngx-translate-router";
import {TranslateModule} from "@ngx-translate/core";
import {ButtonModule} from "primeng/button";
import {LogoComponent} from "../logo/logo.component";
import {HeaderBannerComponent} from "./components/header-banner/header-banner.component";
import {HeaderToolsComponent} from "./components/header-tools/header-tools.component";
import {HeaderComponent} from "./components/header/header.component";
import {MenuComponent} from "./components/menu/menu.component";



@NgModule({
  declarations: [
    HeaderToolsComponent,
    HeaderBannerComponent,
    MenuComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterLink,
    RouterLinkActive,
    LogoComponent,
    TranslateModule,
    LocalizeRouterModule,
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
