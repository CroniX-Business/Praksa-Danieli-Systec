import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';
import { DominikRegisterComponent } from './pages/Dominik_register/Dominik_register.component';
import { DominikErrorComponent } from './pages/Dominik_error/Dominik_error.component';
import { AppRoutesConfig } from './configs/routes.config';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routeNames.login, pathMatch: 'full' },
  {
    path: AppRoutesConfig.routeNames.login,
    component: DominikLoginComponent,
    title: 'Login page',
  },
  {
    path: AppRoutesConfig.routeNames.register,
    component: DominikRegisterComponent,
    title: 'Register page',
  },
  { path: '**', component: DominikErrorComponent, title: 'Error page' },
];
