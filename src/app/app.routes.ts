import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';
import { DominikRegisterComponent } from './pages/Dominik_register/Dominik_register.component';
import { DominikErrorComponent } from './pages/Dominik_error/Dominik_error.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: DominikLoginComponent, title: 'Login page' },
  {
    path: 'register',
    component: DominikRegisterComponent,
    title: 'Register page',
  },
  { path: 'error', component: DominikErrorComponent, title: 'Error page' },
];
