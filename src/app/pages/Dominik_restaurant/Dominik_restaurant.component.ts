import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';

@Component({
  selector: 'app-dominik-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GridModule,
  ],
  templateUrl: './Dominik_restaurant.component.html',
  styleUrl: './Dominik_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikRestaurantComponent {
  public gridData: Restaurant[] = [];
  public routesConfig = AppRoutesConfig;
  public sidebar = false;
  public Product = [];
  public constructor(private restaurantService: RestaurantService) {
    this.gridData = this.restaurantService.getRestaurantsForGrid();
  }
}
