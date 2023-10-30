import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from "primeng/button";
import {CookiesPopupComponent} from "./components/cookies-popup/cookies-popup.component";
import {AnalyticsService} from "./services/analytics.service";
import {CookiesPopupService} from "./services/cookies-popup.service";



@NgModule({
  declarations: [
    CookiesPopupComponent
  ],
  imports: [
    CommonModule,
    ButtonModule
  ],
  exports: [
    CookiesPopupComponent
  ],
  providers: [
    AnalyticsService,
    CookiesPopupService
  ]
})
export class AnalyticsModule { }
