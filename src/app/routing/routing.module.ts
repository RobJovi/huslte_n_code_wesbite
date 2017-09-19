import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from '../app.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';
import { ProgramsComponent } from '../programs/programs.component';
import { SclaComponent } from '../scla/scla.component';
import { SealsComponent } from '../seals/seals.component';
import { LeadcsComponent } from '../leadcs/leadcs.component';
import { HackathonComponent } from '../hackathon/hackathon.component';
import { GetInvovledComponent } from '../get-invovled/get-invovled.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { VolunteerComponent } from '../volunteer/volunteer.component';
import { MentorComponent } from '../mentor/mentor.component';
import { FellowshipComponent } from '../fellowship/fellowship.component';



const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutusComponent },
  {
    path: 'programs', component: ProgramsComponent,
    children: [
      { path: 'SCLA', component: SclaComponent },
      { path: 'seals', component: SealsComponent },
      { path: 'leadCs', component: LeadcsComponent },
      { path: 'hustlencode', component: HackathonComponent },
      { path: '**', redirectTo: 'SCLA', pathMatch: 'full' }
    ]
  },
  {
    path: 'getInvolved', component: GetInvovledComponent,
    children: [
      { path: 'volunteer', component: VolunteerComponent },
      { path: 'mentor', component: MentorComponent },
      { path: 'fellowship', component: FellowshipComponent },
      { path: '**', redirectTo: 'volunteer', pathMatch: 'full' }
    ]
  },
  { path: 'contact-us', component: ContactUsComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
