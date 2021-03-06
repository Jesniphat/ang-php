import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BlockUIModule } from 'ng-block-ui';
import { Uploader }      from 'angular2-http-file-upload';

import { routing } from "./category.routing";
import { SharedModule } from "../../shared/shared.module";

import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryManageComponent } from './category-manage/category-manage.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgxDatatableModule,
    routing,
    SharedModule,
    BlockUIModule
  ],
  declarations: [
    CategoryListComponent,
    CategoryManageComponent
  ],
  providers: [ 
    Uploader 
  ]
})
export class CategoryModule { }
