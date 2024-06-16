import { Route } from '@angular/router';
import {
  ClassifierComponent,
  HowItWorksComponent,
} from '@cat-v-dog-ui/feature';
import { StatsPageComponent } from '../stats-page/stats-page.component';

export const appRoutes: Route[] = [
  {
    path: 'classifier',
    pathMatch: 'full',
    component: ClassifierComponent,
  },
  {
    path: 'how-it-works',
    pathMatch: 'full',
    component: HowItWorksComponent,
  },
  {
    path: 'stats',
    pathMatch: 'full',
    component: StatsPageComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'classifier',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'classifier',
  },
];
