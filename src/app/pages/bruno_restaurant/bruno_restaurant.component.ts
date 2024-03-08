import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/restaurant';
import { RestaurantService } from '../../services/restaurantService';

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
export class BrunoRestaurantComponent implements OnInit {
  public constructor(private restaurantService: RestaurantService) {}
  public selectedItems = new Array<number>();
  public restaurants: Array<Restaurant> = [];
  public modalShower: boolean = false;

  public ngOnInit(): void {
    this.loadData();
  }

  private loadData(): void {
    this.restaurantService
      .getRestaurantsForGrid()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
      });
  }

  public deleteSelected(): void {
    this.restaurantService.removeRestaurants(this.selectedItems);
    this.modalShower = !this.modalShower;
  }
}
