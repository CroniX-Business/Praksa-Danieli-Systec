import { Routes } from '@angular/router';
import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';
import { DominikRegisterComponent } from './pages/Dominik_register/Dominik_register.component';

export const routes: Routes = [
  { path: 'Login-route', component: DominikLoginComponent },
  { path: 'Register-route', component: DominikRegisterComponent },
];
