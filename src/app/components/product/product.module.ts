import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Uploader }      from 'angular2-http-file-upload';

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./product.routing";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductPicComponent } from './product-pic/product-pic.component';

import { TableFilterPipe } from '../../pipes/table-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    SharedModule,

    routing
  ],
  declarations: [
    TableFilterPipe,
    ProductListComponent, 
    ProductManageComponent, 
    ProductPicComponent
  ],
  providers: [ 
    Uploader 
  ]
})
export class ProductModule { }
