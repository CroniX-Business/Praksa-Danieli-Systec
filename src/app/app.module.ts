import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetarLoginComponent } from './pages/petar_login/petar_login.component';
import { PetarRegisterComponent } from './pages/petar_register/petar_register.component';

@NgModule({
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PetarLoginComponent,
    PetarRegisterComponent,
  ],
})
export class AppModule {}
