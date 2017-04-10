import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { routing } from "./category.routing";
import { SharedModule } from "../../shared/shared.module";

import { filterTestPipe } from "../../pipes/testfilter.pipe";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryManageComponent } from './category-manage/category-manage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    SharedModule
  ],
  declarations: [
    filterTestPipe,
    CategoryListComponent,
    CategoryManageComponent
  ]
})
export class CategoryModule { }
