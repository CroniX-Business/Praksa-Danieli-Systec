import { Routes } from '@angular/router';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';
import { DraganRegisterComponent } from './pages/dragan_register/dragan_register.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';
import { routesConfig } from './configs/routes.config';
import { routeNames } from './configs/routes.config';
export const routes: Routes = [
  { path: '', redirectTo: routesConfig.login, pathMatch: 'full' },
  { path: routeNames.login, component: DraganLoginComponent },
  { path: routeNames.register, component: DraganRegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];
