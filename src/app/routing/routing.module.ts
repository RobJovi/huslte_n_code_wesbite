import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AppComponent } from '../app.component';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { HomeComponent } from '../home/home.component';
import { ProgramsComponent } from '../programs/programs.component';
import { SclaComponent } from '../scla/scla.component';
import { SealsComponent } from '../seals/seals.component';
import { LeadcsComponent } from '../leadcs/leadcs.component';
import { HackathonComponent } from '../hackathon/hackathon.component';

const appRoutes = [
  { path: 'home', component:HomeComponent},
  { path: 'about-us', component: AboutusComponent},
  { path: 'programs', component: ProgramsComponent,
    children: [
      { path: 'SCLA', component: SclaComponent },
      { path: 'seals', component: SealsComponent },
      { path: 'leadCs', component: LeadcsComponent },
      { path: 'hustlencode', component: HackathonComponent },
      { path: '**', redirectTo: 'SCLA', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch:'full' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: false}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
