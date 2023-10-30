import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {routes} from "./legal-routing.module";

import {CookiesPolicyComponent} from './views/cookies-policy/cookies-policy.component';
import {LegalNoticeComponent} from './views/legal-notice/legal-notice.component';
import {PrivacyPolicyComponent} from './views/privacy-policy/privacy-policy.component';


@NgModule({
  declarations: [
    CookiesPolicyComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    CookiesPolicyComponent,
    LegalNoticeComponent,
    PrivacyPolicyComponent
  ]
})
export class LegalModule {
}
