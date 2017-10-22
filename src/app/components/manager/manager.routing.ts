import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManagerComponent } from './manager.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

const routes: Routes = [
  {path: 'manager', component: ManagerComponent, children: [
    { path: 'category_list', component: CategoryListComponent, outlet: 'm' }
  ]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true }) ],
  exports: [ RouterModule ]
})
export class routing {}