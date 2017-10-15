import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Uploader }      from 'angular2-http-file-upload';
import { BlockUIModule } from 'ng-block-ui';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./product.routing";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { StockInComponent } from './stock-in/stock-in.component';

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
    AngularMultiSelectModule,
    NgxDatatableModule,

    SharedModule,

    routing
  ],
  declarations: [
    // TableFilterPipe,
    // PageNumberPipe,
    // PageListPipe,
    ProductListComponent, 
    ProductManageComponent,
    StockInComponent
  ],
  providers: [ 
    Uploader 
  ]
})
export class ProductModule { }
