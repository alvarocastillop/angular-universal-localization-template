import { Routes } from '@angular/router';
import {LayoutComponent} from "./shared/theme/layout/layout.component";

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: 'home', loadComponent: () => import('./home/home.component')},
      {path: 'feature', loadComponent: () => import('./feature/feature.component')},
    ] }
];
