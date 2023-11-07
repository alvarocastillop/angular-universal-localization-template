import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { routes } from './app.routes';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { LocalizeParser, LocalizeRouterModule, LocalizeRouterSettings } from '@gilsdav/ngx-translate-router';
import { Location } from '@angular/common';
import { provideAnimations } from '@angular/platform-browser/animations';
import {provideRouter, withDisabledInitialNavigation, withInMemoryScrolling} from '@angular/router';
import {initializeDirectionFactory} from "./shared/internationalization/utils/initialize-direction.factory";
import {localizeBrowserLoaderFactory} from "./shared/internationalization/utils/localize-browser.loader";
import {translateBrowserLoaderFactory} from "./shared/internationalization/utils/translate-browser.loader";
import locales from 'src/assets/i18n/locales.json';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withDisabledInitialNavigation(),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      })),
    provideClientHydration(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: locales.defaultLocale,
        loader: {
          provide: TranslateLoader,
          useFactory: translateBrowserLoaderFactory,
          deps: [HttpClient],
        },
      }),
      LocalizeRouterModule.forRoot(routes, {
        parser: {
          provide: LocalizeParser,
          useFactory: localizeBrowserLoaderFactory,
        deps: [TranslateService, Location, LocalizeRouterSettings, HttpClient],
      },
      initialNavigation: true,
    })),
    provideAnimations(),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      useFactory: initializeDirectionFactory,
      multi: true,
    },
  ],
};
