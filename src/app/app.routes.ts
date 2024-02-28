import { Routes } from '@angular/router';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';
import { PetarRegisterComponent } from './pages/petar_register/petar_register.component';
import { PetarHomepageComponent } from './pages/petar_homepage/petar_homepage.component';
import { PetarError404Component } from './pages/petar_error404/petar_error404.component';
import { AppRoutesConfig } from './config/routes.config';
import { PetarRestaurantComponent } from './pages/petar_restaurant/petar_restaurant.component';
import { PetarCategoryComponent } from './pages/petar_category/petar_category.component';

export const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routes.login, pathMatch: 'full' },
  {
    path: AppRoutesConfig.routeNames.login,
    component: PetarLoginComponent,
    title: 'Login',
  },
  {
    path: AppRoutesConfig.routeNames.register,
    component: PetarRegisterComponent,
    title: 'Register',
  },
  {
    path: AppRoutesConfig.routeNames.homepage,
    component: PetarHomepageComponent,
    title: 'Homepage',
  },
  {
    path: AppRoutesConfig.routeNames.restaurants,
    component: PetarRestaurantComponent,
    title: 'Restaurants',
  },
  {
    path: AppRoutesConfig.routeNames.category,
    component: PetarCategoryComponent,
    title: 'Category',
  },
  {
    path: AppRoutesConfig.routeNames.notFound,
    component: PetarError404Component,
    title: '404',
  },
];
