import {Injectable, signal, WritableSignal} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {LocalizeRouterService} from "@gilsdav/ngx-translate-router";
import {filter} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InternationalizationService {

  private readonly locales: string[] = this.localizeRouterService.parser.locales;
  private currentUrl: WritableSignal<string> = signal('');

  constructor(private localizeRouterService: LocalizeRouterService, private router: Router,) {
  }

  public getLocales(): string[] {
    return this.locales;
  }

  public getCurrentUrl(): WritableSignal<string> {
    return this.currentUrl
  }

  public init(): void {
    this.setCurrentUrl();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
    ).subscribe(() => {
      this.setCurrentUrl();
    });
  }

  private setCurrentUrl(): void {
    this.currentUrl.set(
      this.router.url
          .replace('/' + this.localizeRouterService.parser.currentLang, '')
          .split('?')[0])
  }
}
