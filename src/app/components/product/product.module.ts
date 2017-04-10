import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./product.routing";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductManageComponent } from './product-manage/product-manage.component';
import { ProductPicComponent } from './product-pic/product-pic.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    SharedModule,

    routing
  ],
  declarations: [ProductListComponent, ProductManageComponent, ProductPicComponent]
})
export class ProductModule { }
