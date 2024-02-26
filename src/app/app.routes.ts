import { Routes } from '@angular/router';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';
import { PetarRegisterComponent } from './pages/petar_register/petar_register.component';
import { PetarError404Component } from './pages/petar_error404/petar_error404.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: PetarLoginComponent },
  { path: 'register', component: PetarRegisterComponent },
  { path: '**', component: PetarError404Component },
];
