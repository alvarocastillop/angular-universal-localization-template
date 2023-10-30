import {Routes} from "@angular/router";
import {ContactViewComponent} from "./views/contact-view/contact-view.component";

export const routes: Routes = [
  { path: '', component: ContactViewComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
]
