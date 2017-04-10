import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// export const routes: Routes = [
//     { path: '', redirectTo: 'home', pathMatch: 'full' }
// ];

// export const routing = RouterModule.forRoot(routes, { useHash: true });

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class routing {}
