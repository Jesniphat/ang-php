import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
// import { Uploader }      from 'angular2-http-file-upload';

import { routing } from "./app.routing";

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";

import { LoginModule } from './components/login/login.module';
import { HomeModule } from './components/home/home.module';
import { SettingModule } from './components/setting/setting.module';
import { CategoryModule } from './components/category/category.module';
import { ProductModule } from './components/product/product.module';
import { HeadsliderModule } from './components/headslider/headslider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // routing //
    routing,
    // system //
    MaterialModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    // Service module //
    SharedModule,
    // page module //
    LoginModule,
    HomeModule,
    SettingModule,
    CategoryModule,
    ProductModule,
    HeadsliderModule
  ],
  providers: [
    // Uploader
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
