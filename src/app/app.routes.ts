import { Routes } from '@angular/router';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';
import { PetarRegisterComponent } from './pages/petar_register/petar_register.component';
import { PetarHomepageComponent } from './pages/petar_homepage/petar_homepage.component';
import { PetarError404Component } from './pages/petar_error404/petar_error404.component';
import { AppRoutesConfig } from './config/routes.config';

export const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routes.login, pathMatch: 'full' },
  { path: AppRoutesConfig.routeNames.login, component: PetarLoginComponent },
  {
    path: AppRoutesConfig.routeNames.register,
    component: PetarRegisterComponent,
  },
  {
    path: AppRoutesConfig.routeNames.homepage,
    component: PetarHomepageComponent,
  },
  {
    path: AppRoutesConfig.routeNames.notFound,
    component: PetarError404Component,
  },
];
