import { Routes } from '@angular/router';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';
import { DraganRegisterComponent } from './pages/dragan_register/dragan_register.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { appRouteConfig } from './configs/routes.config';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: appRouteConfig.routesConfig.login,
    pathMatch: 'full',
  },
  { path: appRouteConfig.routeNames.login, component: DraganLoginComponent },
  {
    path: appRouteConfig.routeNames.register,
    component: DraganRegisterComponent,
  },
  {
    path: appRouteConfig.routeNames.home,
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: appRouteConfig.routeNames.restaurant,
        pathMatch: 'full',
      },
      {
        path: appRouteConfig.routeNames.restaurant,
        component: RestaurantComponent,
      },
      {
        path: appRouteConfig.routeNames.categories,
        component: CategoriesComponent,
      },
    ],
  },

  { path: '**', component: PageNotFoundComponent },
];
