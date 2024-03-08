import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';
import { HomeComponent } from '../home/home.component';
import { GridModule } from '@progress/kendo-angular-grid';
import { DialogModule } from '@progress/kendo-angular-dialog';
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
    DialogModule,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent {
  public mySelection: Array<number> = [];
  public routes = appRouteConfig;
  public gridData: Restaurant[] = [];
  public opened = false;

  public constructor(public restaurantServis: RestaurantService) {
    this.gridData = restaurantServis.getRestaurants();
  }

  public open(): void {
    this.opened = true;
  }

  public close(status: string): void {
    if (status == 'yes') {
      this.deleteSelected();
    }
    this.opened = false;
  }

  public deleteSelected(): void {
    let i = 0;
    for (i = 0; i < this.mySelection.length; i++) {
      const index = this.gridData.findIndex(e => e.id === this.mySelection[i]);
      if (index !== -1) {
        this.gridData.splice(index, 1);
      }
    }
    this.mySelection = [];
  }
}
