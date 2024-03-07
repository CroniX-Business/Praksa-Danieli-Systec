import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
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
export class DominikRestaurantComponent implements OnInit {
  public constructor(private restaurantService: RestaurantService) {}
  public gridData: Restaurant[] = [];
  public routesConfig = AppRoutesConfig;
  public sidebar = false;
  public Product = [];
  public ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.restaurantService
      .getRestaurantsForGrid()
      .subscribe((Restaurants: Restaurant[]) => {
        this.gridData = Restaurants;
      });
  }
  public onDelete(): void {}
}
