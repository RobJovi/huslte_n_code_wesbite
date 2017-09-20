import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RoutingModule} from './routing/routing.module';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
//components
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SclaComponent } from './scla/scla.component';
import { SealsComponent } from './seals/seals.component';
import { LeadcsComponent } from './leadcs/leadcs.component';
import { HackathonComponent } from './hackathon/hackathon.component';
import { GetInvovledComponent } from './get-invovled/get-invovled.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VolunteerComponent } from './volunteer/volunteer.component';
import { MentorComponent } from './mentor/mentor.component';
import { FellowshipComponent } from './fellowship/fellowship.component';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';
import { PhonePipePipe } from './phone-pipe.pipe';
import { PreloadSelectedModulesList } from './config/preload_selected_modules_list'

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ProgramsComponent,
    SclaComponent,
    SealsComponent,
    LeadcsComponent,
    HackathonComponent,
    GetInvovledComponent,
    ContactUsComponent,
    VolunteerComponent,
    MentorComponent,
    FellowshipComponent,
    PhonePipePipe,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RoutingModule,
    FormsModule, 
    HttpClientModule
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, PreloadSelectedModulesList],
  bootstrap: [AppComponent]
})
export class AppModule { }
