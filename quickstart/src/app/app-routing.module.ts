import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Landing }          from './views/landing.page';


const routes: Routes = [
  { path: '', redirectTo: '/landing', pathMatch: 'full' },
  { path: 'landing', component: Landing }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
