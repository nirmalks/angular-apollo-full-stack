import {  Routes } from '@angular/router';
import { CricketerListComponent } from './cricketer-list/cricketer-list.component';
import { CricketerDetailComponent } from './cricketer-detail/cricketer-detail.component';
import { CricketerResolver } from './cricketer-detail-resolver';

export const appRoutes: Routes = [

  { path: '',
    redirectTo: 'cricketers',
    pathMatch: 'full'
  },
  {
    path: 'cricketers',
    component: CricketerListComponent,
  },
  { path: 'cricketer-details/:id', component: CricketerDetailComponent , resolve: { cricketer: CricketerResolver }},
  // { path: '**', component: 'Page not found' }

];

