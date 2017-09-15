import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';

import { RoutingModule} from './routing/routing.module'
//components
import { AppComponent } from './app.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { SclaComponent } from './scla/scla.component';
import { SealsComponent } from './seals/seals.component';
import { LeadcsComponent } from './leadcs/leadcs.component';
import { HackathonComponent } from './hackathon/hackathon.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    HomeComponent,
    ProgramsComponent,
    SclaComponent,
    SealsComponent,
    LeadcsComponent,
    HackathonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    Angular2FontawesomeModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
