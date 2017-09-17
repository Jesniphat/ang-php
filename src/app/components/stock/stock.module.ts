import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { StockInComponent } from './stock-in/stock-in.component';
import { NgAutoCompleteModule } from "ng-auto-complete";

import { routing } from "./stock.routing";

import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NgAutoCompleteModule,

    routing,

    SharedModule
  ],
  declarations: [StockInComponent]
})
export class StockModule { }