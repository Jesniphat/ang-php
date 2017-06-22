import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { MdDialogModule } from '@angular/material';
import { Uploader }      from 'angular2-http-file-upload';

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./product.routing";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';

// import { TableFilterPipe } from '../../pipes/table-filter.pipe';
// import { PageNumberPipe } from '../../pipes/page-number.pipe';
// import { PageListPipe } from '../../pipes/page-list.pipe';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    MdDialogModule,

    SharedModule,

    routing
  ],
  declarations: [
    // TableFilterPipe,
    // PageNumberPipe,
    // PageListPipe,
    ProductListComponent, 
    ProductManageComponent
  ],
  providers: [ 
    Uploader 
  ]
})
export class ProductModule { }
