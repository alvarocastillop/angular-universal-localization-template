import { Routes } from '@angular/router';
import {NotFoundComponent} from "./not-found/not-found.component";
import {LayoutComponent} from "./shared/theme/layout/layout.component";

export const routes: Routes = [
  { path: '', component: LayoutComponent, children: [
      { path: '', loadComponent: () => import('./home/home.component') },
      { path: 'legal', loadChildren: () => import('./legal/legal.module').then(m => m.LegalModule), data: { skipRouteLocalization: { localizeRedirectTo: true } } },
      { path: '**', component: NotFoundComponent },
    ] },
];
