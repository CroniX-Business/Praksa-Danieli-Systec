import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/Restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-dominik-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    GridModule,
    ButtonsModule,
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
  public selectedItems = new Array<number>();
  public deletedRestoraunts: Restaurant[] = [];

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
  public onDelete(): void {
    let popped = 0;
    const temporarylen = this.gridData.length;
    for (let i = 0; i < this.gridData.length; i++) {
      if (i + popped == temporarylen) break;
      for (let j = 0; j < this.selectedItems.length; j++) {
        if (this.gridData[i].RestoID == this.selectedItems[j]) {
          this.deletedRestoraunts.push(this.gridData[i]);
          this.gridData.splice(i, 1);
          popped += 1;
        }
      }
    }
  }
  public onAdd(): void {
    if (this.deletedRestoraunts.length > 0) {
      this.gridData.push(this.deletedRestoraunts[0]);
      this.deletedRestoraunts.shift();
    }
  }
}
