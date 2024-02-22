import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DominikLoginComponent } from './pages/Dominik_login/Dominik_login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, DominikLoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
