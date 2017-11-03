import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RoutingModule} from './routing/routing.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
//components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PreloadSelectedModulesList } from './config/preload_selected_modules_list';
import {NgsRevealModule} from 'ng-scrollreveal';
import {Ng2PageScrollModule} from 'ng2-page-scroll';
import {CountDown} from "ng2-date-countdown";

// Import your library
import { SlickModule } from 'ngx-slick';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PhonePipePipe,
    CountDown

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RoutingModule,
    FormsModule, 
    HttpClientModule,
    SlickModule.forRoot(),
    NgsRevealModule.forRoot(),
    Ng2PageScrollModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
