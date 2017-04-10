import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from "@angular/http";
// import { NgSemanticModule } from "ng-semantic";

import { HomeComponent } from "./home.component";
import { routing } from "./home.routing";
import { SharedModule } from "../../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    routing,
    SharedModule
  ],
  declarations: [
    HomeComponent
  ],
  bootstrap: [
      HomeComponent
  ]
})
export class HomeModule { }
