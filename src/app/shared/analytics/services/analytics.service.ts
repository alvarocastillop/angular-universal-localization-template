import {effect, Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {GoogleTagManagerService} from "angular-google-tag-manager";
import {Subscription} from "rxjs";
import {environment} from "src/environments/environment";

import {CookiesPopupService} from "./cookies-popup.service";

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  private subscriptions = new Subscription()
  private readonly platformId: any

  public constructor(
    private cookiesPopupService: CookiesPopupService,
    @Inject(PLATFORM_ID) platformId: any,
    private googleTagManagerService: GoogleTagManagerService,
    private router: Router
  ) {
    this.platformId = platformId

    effect(() => {
      const cookiesAccepted = this.cookiesPopupService.isCookieAccepted
      cookiesAccepted() && this.initializeGoogleTagManager()
    })
  }

  public init(): void {
    if (this.platformId === 'browser' && environment.googleTagManager.id.length > 0) {
      this.cookiesPopupService.init()
    }
  }

  private async initializeGoogleTagManager(): Promise<void> {

    if (this.googleTagManagerService === null) return

    await this.googleTagManagerService.addGtmToDom()

    this.subscriptions.add(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          const gtmTag = {
            event: 'page',
            pageName: event.url
          };

          this.googleTagManagerService && this.googleTagManagerService.pushTag(gtmTag);
        }
      })
    )
  }
}
