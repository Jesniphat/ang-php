import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { BlockUIModule } from 'ng-block-ui';
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
    BlockUIModule,

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
