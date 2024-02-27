import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';
import { BrunoRegisterComponent } from './pages/bruno_register/bruno_register.component';
import { BrunoNotFoundComponent } from './pages/bruno_not_found/bruno_not_found.component';
import { AppRoutesConfig } from './configs/app-routes.config';
const routes: Routes = [
  { path: '', redirectTo: AppRoutesConfig.routes.login, pathMatch: 'full' },
  { path: AppRoutesConfig.routeNames.login, component: BrunoLoginComponent },
  {
    path: AppRoutesConfig.routeNames.register,
    component: BrunoRegisterComponent,
  },
  { path: AppRoutesConfig.routeNames.error, component: BrunoNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
