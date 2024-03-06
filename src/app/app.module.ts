import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrunoLoginComponent } from './pages/bruno_login/bruno_login.component';
import { BrunoRegisterComponent } from './pages/bruno_register/bruno_register.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { BrunoRestaurantComponent } from './pages/bruno_restaurant/bruno_restaurant.component';
import { BrunoCategoryComponent } from './pages/bruno_category/bruno_category.component';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrunoLoginComponent,
    BrunoRegisterComponent,
    BrunoRestaurantComponent,
    BrunoCategoryComponent,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
