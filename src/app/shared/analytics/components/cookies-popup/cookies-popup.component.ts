import {
  Component,
  effect,
  Inject,
  PLATFORM_ID,
  Signal
} from '@angular/core';
import {environment} from "src/environments/environment";
import {CookiesPopupService} from "../../services/cookies-popup.service";

@Component({
  selector: 'app-cookies-popup',
  templateUrl: './cookies-popup.component.html',
  styleUrls: ['./cookies-popup.component.scss']
})
export class CookiesPopupComponent {

  public cookiesAccepted: Signal<boolean | null> | null = null
  public showCookiesPopup: boolean = false

  public constructor(private cookiesPopupService: CookiesPopupService, @Inject(PLATFORM_ID) platformId: any) {
    if (platformId === 'browser') {
      this.cookiesPopupService.init()
      this.cookiesAccepted = this.cookiesPopupService.isCookieAccepted

      effect(() => {
        this.showCookiesPopup = !!this.cookiesAccepted && this.cookiesAccepted() === null && environment.googleTagManager.id.length > 0
      })
    }
  }

  public accept(): void {
    this.cookiesPopupService.accept()
  }

  public reject(): void {
    this.cookiesPopupService.reject()
  }
}
