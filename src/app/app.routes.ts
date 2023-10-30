import { Routes } from '@angular/router';
import {LayoutComponent} from "./shared/theme/layout/layout.component";

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      {path: '**', redirectTo: '', pathMatch: 'full'},
      {path: '', loadComponent: () => import('./home/home.component')},
    ] }
];
