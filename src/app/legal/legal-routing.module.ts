import {Routes} from "@angular/router";
import {CookiesPolicyComponent} from "./views/cookies-policy/cookies-policy.component";
import {LegalNoticeComponent} from "./views/legal-notice/legal-notice.component";
import {PrivacyPolicyComponent} from "./views/privacy-policy/privacy-policy.component";

export const routes: Routes = [
  {path: 'cookies-policy', component: CookiesPolicyComponent},
  {path: 'legal-notice', component: LegalNoticeComponent},
  {path: 'privacy-policy', component: PrivacyPolicyComponent},
  { path: '**', redirectTo: 'cookies-policy', pathMatch: 'full'}
]
