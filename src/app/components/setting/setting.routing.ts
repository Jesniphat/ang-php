import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StaffSettingComponent } from './staff-setting/staff-setting.component';
import { StaffCreateComponent } from './staff-create/staff-create.component';
// import { CategoryManageComponent } from './category_manage/category_manage.component';

// export const routes: Routes = [
//     { path: 'setting', component: StaffSettingComponent },
//     { path: 'staffcreate', component: StaffCreateComponent}
//     // { path: 'category_list/create_cate/:id', component: CategoryManageComponent }
// ];

// export const routing = RouterModule.forChild(routes);

const routes: Routes = [
    { path: 'setting', component: StaffSettingComponent },
    { path: 'staffcreate', component: StaffCreateComponent}
    // { path: 'category_list/create_cate/:id', component: CategoryManageComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class routing {}