import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';
import { PetarRegisterComponent } from './pages/petar_register/petar_register.component';
import { PetarError404Component } from './pages/petar_error404/petar_error404.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { provideAnimations } from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PetarLoginComponent,
    PetarRegisterComponent,
    PetarError404Component,
    ButtonsModule,
    DialogsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthGuard, provideAnimations()],
  bootstrap: [AppComponent],
})
export class AppModule {}
