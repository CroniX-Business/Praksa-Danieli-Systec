import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';
import { BrunoRegisterComponent } from './pages/bruno_register/bruno_register.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrunoLoginComponent,
    BrunoRegisterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
