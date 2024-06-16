import { Route } from '@angular/router';
import { ClassifierComponent } from '@cat-v-dog-ui/feature';

export const appRoutes: Route[] = [
  {
    path: 'classifier',
    pathMatch: 'full',
    component: ClassifierComponent,
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
