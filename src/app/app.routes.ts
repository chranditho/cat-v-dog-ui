import { Route } from '@angular/router';
import {
  ClassifierComponent,
  HowItWorksComponent,
} from '@cat-v-dog-ui/feature';

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
