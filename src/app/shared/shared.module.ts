import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/homePage/homePage.component';
import { AboutPagesComponent } from './pages/aboutPages/aboutPages.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContactPageComponent } from './pages/contactPage/contactPage.component';
import { SerchBoxComponent } from './components/serchBox/serchBox.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    SerchBoxComponent,
    SidebarComponent,

  ],
  exports: [
    AboutPagesComponent,
    ContactPageComponent,
    HomePageComponent,
    SerchBoxComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
