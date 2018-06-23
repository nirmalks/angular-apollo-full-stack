import {  Routes } from '@angular/router';
import { CricketerListComponent } from './cricketer-list/cricketer-list.component';
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';

export const appRoutes: Routes = [

  { path: '',
    redirectTo: 'cricketers',
    pathMatch: 'full'
  },
  {
    path: 'cricketers',
    component: CricketerListComponent,
  },
  { path: 'cricketer-details/:id', component: CricketerDetailComponent },
  // { path: '**', component: 'Page not found' }

];

