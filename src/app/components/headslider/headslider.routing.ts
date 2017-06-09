import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadsliderListComponent } from './headslider-list/headslider-list.component';
import { HeadsliderManageComponent } from './headslider-manage/headslider-manage.component';

const routes: Routes = [
    { path: 'head_slider', component: HeadsliderListComponent, pathMatch: "full" },
    { path: 'head_slider/slider/:id', component: HeadsliderManageComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}