import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';

@Component({
  selector: 'app-bruno-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GridModule,
  ],
  templateUrl: './bruno_restaurant.component.html',
  styleUrl: './bruno_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoRestaurantComponent {
  public constructor(
    protected router: Router,
    protected restaurantService: RestaurantService
  ) {
    this.restaurantService
      .getRestaurantsForGrid()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      });
  }

  protected restaurants: Restaurant[] = [];
}
