import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';

export const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "about",
    component: AboutPagesComponent,
  },
  {
    path: "**",
    redirectTo: "home"
  }
]


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
