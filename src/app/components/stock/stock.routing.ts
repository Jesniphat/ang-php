import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockInComponent } from './stock-in/stock-in.component';

const routes: Routes = [
    { path: 'stock_in', component: StockInComponent, pathMatch: "full" }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}

