import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";
import { Uploader }      from 'angular2-http-file-upload';

import { SharedModule } from "../../shared/shared.module";

import { routing } from "./headslider.routing";
import { HeadsliderListComponent } from './headslider-list/headslider-list.component';
import { HeadsliderManageComponent } from './headslider-manage/headslider-manage.component';

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
    HeadsliderListComponent,
    HeadsliderManageComponent
  ],
  providers: [ 
    Uploader 
  ]
})
export class HeadsliderModule { }
