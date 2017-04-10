import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductPicComponent } from './product-pic/product-pic.component';

// export const routes: Routes = [
//     { path: 'product_list', component: ProductListComponent, pathMatch: "full" },
//     // { path: 'product_list/product/:id', component: ProductManageComponent },
//     // { path: 'product_list/product_pic/:id', component: ProductPicComponent}
// ];

// export const routing = RouterModule.forChild(routes);

const routes: Routes = [
    { path: 'product_list', component: ProductListComponent, pathMatch: "full" },
    { path: 'product_list/product/:id', component: ProductManageComponent },
    { path: 'product_list/product_pic/:id', component: ProductPicComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}