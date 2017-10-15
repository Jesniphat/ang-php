import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { StockInComponent } from './stock-in/stock-in.component';

const routes: Routes = [
    { path: 'product_list', component: ProductListComponent, pathMatch: "full" },
    { path: 'product_list/product/:id', component: ProductManageComponent },
    { path: 'stock_in', component: StockInComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}
