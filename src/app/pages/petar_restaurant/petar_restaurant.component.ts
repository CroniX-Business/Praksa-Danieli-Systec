import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-petar-restaurant',
  standalone: true,
  templateUrl: './petar_restaurant.component.html',
  styleUrl: './petar_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GridModule,
  ],
})
export class PetarRestaurantComponent {
  public gridData: Restaurant[] = [];

  public constructor(private restaurantService: RestaurantService) {
    this.gridData = this.restaurantService.getRestaurantsForGrid();
  }
}
