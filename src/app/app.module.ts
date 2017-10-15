import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { HttpModule }       from '@angular/http';

import { BlockUIModule }    from 'ng-block-ui';
import { routing }          from './app.routing';

import { AppComponent }     from './app.component';
import { SharedModule }     from './shared/shared.module';

import { LoginModule }      from './components/login/login.module';
import { HomeModule }       from './components/home/home.module';
import { SettingModule }    from './components/setting/setting.module';
import { CategoryModule }   from './components/category/category.module';
import { ProductModule }    from './components/product/product.module';
import { HeadsliderModule } from './components/headslider/headslider.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BlockUIModule,
    // routing //
    routing,
    // system //
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
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
