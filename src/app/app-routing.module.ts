import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';

const routes: Routes = [
  {
    path: "home",
    component: HomePageComponent,
  },
  {
    path: "about",
    component: AboutPagesComponent,
  },
  {
    path: "contact",
    component: ContactPageComponent,
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
