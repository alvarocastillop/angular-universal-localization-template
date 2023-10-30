import {Injectable, Signal, signal, WritableSignal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesPopupService {

  private cookiesAccepted: WritableSignal<boolean | null> = signal<boolean | null>(null)
  private localStorageKey = 'cookiesAccepted'

  constructor() {}

  public init(): void {
    this.cookiesAccepted.update(() =>
      (localStorage.getItem(this.localStorageKey) === null)
        ? null
        : localStorage.getItem(this.localStorageKey) === 'true')
  }

  public get isCookieAccepted(): Signal<boolean | null> {
    return this.cookiesAccepted
  }

  public accept(): void {
    this.setValue(true)
  }

  public reject(): void {
    this.setValue(false)
  }

  private setValue(value: boolean): void {
    this.cookiesAccepted.update(() => value)
    localStorage.setItem(this.localStorageKey, (value) ? 'true' : 'false')
  }
}
