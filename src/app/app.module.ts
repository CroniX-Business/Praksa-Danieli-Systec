import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, BrunoLoginComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
