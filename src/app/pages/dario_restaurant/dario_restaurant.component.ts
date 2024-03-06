import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/restaurant';

@Component({
  selector: 'app-dario-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    GridModule,
  ],
  templateUrl: './dario_restaurant.component.html',
  styleUrl: './dario_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioRestaurantComponent implements OnInit {
  public restaurants: Restaurant[] = [];

  public constructor(private restaurantService: RestaurantService) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.restaurantService
      .getRestaurantsForGrid()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      });
  }
}
