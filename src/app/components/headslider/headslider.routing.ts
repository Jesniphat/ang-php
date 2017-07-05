import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeadsliderListComponent } from './headslider-list/headslider-list.component';
import { HeadsliderManageComponent } from './headslider-manage/headslider-manage.component';
import { TestrComponent } from './testr/testr.component';
import { Testr2Component } from './testr2/testr2.component';

const routes: Routes = [
    // { path: 'head_slider', component: HeadsliderListComponent,
    //     children: [
    //       {path: 'testrcomp', component:  TestrComponent, outlet:'slide'},
    //       {path: 'testr2comp', component:  Testr2Component, outlet:'slide'}
    //     ] 
    // },
    { path: 'head_slider', component: HeadsliderListComponent, pathMatch: "full" },
    { path: 'head_slider/slider/:id', component: HeadsliderManageComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}