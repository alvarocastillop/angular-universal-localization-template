import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink} from "@angular/router";
import {LocalizeRouterModule} from "@gilsdav/ngx-translate-router";
import { FooterMenuComponent } from './footer-menu/footer-menu.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    FooterMenuComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    LocalizeRouterModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
