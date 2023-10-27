import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgModule, TransferState} from '@angular/core';
import {CommonModule, Location} from '@angular/common';
import {LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings} from "@gilsdav/ngx-translate-router";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {routes} from "../../app.routes";
import {localizeBrowserLoaderFactory} from "./utils/localize-browser.loader";
import {translateBrowserLoaderFactory} from "./utils/translate-browser.loader";
import locales from 'src/assets/i18n/locales.json';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TranslateModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage: locales.defaultLocale,
      loader: {provide: TranslateLoader, useFactory: translateBrowserLoaderFactory, deps: [HttpClient, TransferState]}
    }),
    LocalizeRouterModule.forRoot(routes, {
      parser: {
        provide: LocalizeParser,
        useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient, TransferState],
      },
      initialNavigation: true,
    }),
  ],
  exports: [
    TranslateModule,
    LocalizeRouterModule,
    TranslateModule,
    HttpClientModule,
  ]
})
export class InternationalizationModule { }
