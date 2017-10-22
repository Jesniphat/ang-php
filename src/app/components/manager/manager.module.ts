import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule }    from '@angular/platform-browser';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { routing } from "./manager.routing";

import { SharedModule }     from '../../shared/shared.module';

import { BlockUIModule }    from 'ng-block-ui';

import { ManagerComponent } from './manager.component';
import { CategoryListComponent } from './category/category-list/category-list.component';

@NgModule({
  imports: [
    CommonModule,
    
    BlockUIModule,
    BrowserModule,
    FormsModule,
    HttpModule,

    routing,

    SharedModule
  ],
  declarations: [
    ManagerComponent,
    CategoryListComponent
  ]
})
export class ManagerModule { }
