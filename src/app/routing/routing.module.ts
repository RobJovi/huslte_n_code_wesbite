import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadSelectedModulesList } from '../config/preload_selected_modules_list'

import { AppComponent } from '../app.component';
import { HomeComponent } from '../home/home.component';


const appRoutes = [
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {preloadingStrategy: PreloadSelectedModulesList }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
