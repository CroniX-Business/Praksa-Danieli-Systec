import { Routes } from '@angular/router';
import { DarioLoginComponent } from './pages/dario_login/dario_login.component';
import { DarioRegisterComponent } from './pages/dario_register/dario_register.component';
import { AppRoutesConfig } from './configs/routes.config';
import { DarioNotFoundComponent } from './pages/dario_not_found/dario_not_found.component';
import { DarioHomeComponent } from './pages/dario_home/dario_home.component';
import { DarioCategoryComponent } from './pages/dario_category/dario_category.component';
import { DarioRestaurantComponent } from './pages/dario_restaurant/dario_restaurant.component';

export const appRoutes: Routes = [
  {
    path: AppRoutesConfig.routeNames.login,
    component: DarioLoginComponent,
    title: 'Login page',
  },
  {
    path: AppRoutesConfig.routeNames.register,
    component: DarioRegisterComponent,
    title: 'Register page',
  },
  {
    path: AppRoutesConfig.routeNames.error,
    component: DarioNotFoundComponent,
    title: 'Error page',
  },
  {
    path: AppRoutesConfig.routeNames.home,
    component: DarioHomeComponent,
    title: 'Home page',
  },
  {
    path: AppRoutesConfig.routeNames.category,
    component: DarioCategoryComponent,
    title: 'Category page',
  },
  {
    path: AppRoutesConfig.routeNames.restaurant,
    component: DarioRestaurantComponent,
    title: 'Restaurant page',
  },
  { path: '', redirectTo: AppRoutesConfig.routeNames.login, pathMatch: 'full' },
  { path: '**', component: DarioNotFoundComponent },
];
