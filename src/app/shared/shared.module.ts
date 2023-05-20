import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [

    HomePageComponent,
    AboutPagesComponent,
    SidebarComponent,
  ],
    exports:[
      HomePageComponent,
      AboutPagesComponent,
      SidebarComponent,

    ]
})
export class SharedModule { }
