import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DraganLoginComponent } from './pages/dragan_login/dragan_login.component';
import { DraganRegisterComponent } from './pages/dragan_register/dragan_register.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './pages/home/home.component';
import { loginGuard } from './guards/auth.guards';
import { provideAnimations } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [AppComponent],
  providers: [loginGuard, provideAnimations()],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DraganLoginComponent,
    DraganRegisterComponent,
    RouterModule.forRoot(routes),
    HomeComponent,
  ],
})
export class AppModule {}
