import { Routes } from '@angular/router';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';
import { DraganRegisterComponent } from './pages/dragan_register/dragan_register.component';
import { PageNotFoundComponent } from './pages/pageNotFound/pageNotFound.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: DraganLoginComponent },
  { path: 'register', component: DraganRegisterComponent },
  { path: '**', component: PageNotFoundComponent },
];
