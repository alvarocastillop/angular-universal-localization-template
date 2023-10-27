import {Component, effect} from '@angular/core';
import {InternationalizationService} from "src/app/shared/internationalization/services/internationalization.service";

@Component({
  selector: 'app-header-tools',
  templateUrl: './header-tools.component.html',
  styleUrls: ['./header-tools.component.scss']
})
export class HeaderToolsComponent {

  public locales: string[] = []
  public currentUrl = '';

  public constructor(private internationalizationService: InternationalizationService) {
    this.locales = this.internationalizationService.getLocales()

    effect(() => {
      this.currentUrl = this.internationalizationService.getCurrentUrl()()
    })
  }

}
