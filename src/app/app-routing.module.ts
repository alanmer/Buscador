import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/homePage/homePage.component';
import { AboutPagesComponent } from './shared/pages/aboutPages/aboutPages.component';
import { ContactPageComponent } from './shared/pages/contactPage/contactPage.component';

const routes: Routes = [
  {
    /* Este bloque de código define una ruta para `HomePageComponent`. Significa que cuando el usuario
 navegue a la ruta `/home`, se mostrará `HomePageComponent`. */
    path: 'home',
    component: HomePageComponent,
  },
  {
    /* Este bloque de código define una ruta para `AboutPagesComponent`. Significa que cuando el usuario
navegue a la ruta `/about`, se mostrará `AboutPagesComponent`. */
    path: 'about',
    component: AboutPagesComponent,
  },
  {
    /* Este bloque de código define una ruta para `ContactPageComponent`. Significa que cuando el usuario
  navegue a la ruta `/contact`, se mostrará `ContactPageComponent`. */
    path: 'contact',
    component: ContactPageComponent,
  },
  {
    /* Este bloque de código define una ruta para la ruta `/countries` y usa la propiedad
    `loadChildren` para cargar de forma diferida el módulo `CountriesModule` cuando el usuario
    navega a la ruta `/countries`. La instrucción `import` se usa para importar dinámicamente el
    módulo, y el método `then` se usa para recuperar el `CountriesModule` del módulo importado. Esto
    permite una carga más eficiente de la aplicación, ya que el `CountriesModule` solo se carga
    cuando es necesario. */
    path: 'countries',
    loadChildren: () =>
      import('./countries/countries.module').then((m) => m.CountriesModule),
  },

  /* Este bloque de código define una ruta general que redirige cualquier ruta desconocida o inválida a
 la ruta "de origen". El carácter comodín `**` coincide con cualquier URL que no coincida con
 ninguna de las rutas definidas, y la propiedad `redirectTo` especifica la ruta a la que se
 redirigirá. En este caso, las rutas desconocidas se redirigirán a la ruta "de origen". */
  // {
  //   path: '**',
  //   redirectTo: 'countries',
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
