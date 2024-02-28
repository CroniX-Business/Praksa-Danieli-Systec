import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';
import { BrunoRegisterComponent } from './pages/bruno_register/bruno_register.component';
import { BrunoNotFoundComponent } from './pages/bruno_not_found/bruno_not_found.component';
import { AppRoutesConfig } from './configs/app-routes.config';
import { BrunoCategoryComponent } from './pages/bruno_category/bruno_category.component';
import { BrunoRestaurantComponent } from './pages/bruno_restaurant/bruno_restaurant.component';
const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routes.login, pathMatch: 'full' },
  { path: AppRoutesConfig.routeNames.login, component: BrunoLoginComponent },
  {
    path: AppRoutesConfig.routeNames.register,
    component: BrunoRegisterComponent,
  },
  {
    path: AppRoutesConfig.routeNames.notFound,
    component: BrunoNotFoundComponent,
  },
  {
    path: AppRoutesConfig.routeNames.categories,
    component: BrunoCategoryComponent,
  },
  {
    path: AppRoutesConfig.routeNames.restaurants,
    component: BrunoRestaurantComponent,
  },
  {
    path: '**',
    redirectTo: AppRoutesConfig.routes.notFound,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
