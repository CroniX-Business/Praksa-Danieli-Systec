import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';
import { HomeComponent } from '../home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
    GridModule,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent {
  public mySelection: Array<number> = [];
  public routes = appRouteConfig;
  public gridData: Restaurant[] = [];
  public constructor(public restaurantServis: RestaurantService) {
    this.gridData = restaurantServis.getRestaurants();
  }
  public onClick(): void {
    console.log(this.mySelection);
  }
}
