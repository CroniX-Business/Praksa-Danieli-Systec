import { Routes } from '@angular/router';
import { DarioLoginComponent } from './pages/dario_login/dario_login.component';
import { DarioRegisterComponent } from './pages/dario_register/dario_register.component';
import { routeNames } from './configs/routes.config';

export const appRoutes: Routes = [
  {
    path: routeNames.login,
    component: DarioLoginComponent,
    title: 'Login page',
  },
  {
    path: routeNames.register,
    component: DarioRegisterComponent,
    title: 'Register page',
  },
];
