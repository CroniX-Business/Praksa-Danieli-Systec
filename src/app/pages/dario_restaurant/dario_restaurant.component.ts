import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service';
import { GridModule } from '@progress/kendo-angular-grid';
import { Restaurant } from '../../models/restaurant';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';

@Component({
  selector: 'app-dario-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    GridModule,
    ButtonsModule,
    DialogsModule,
  ],
  templateUrl: './dario_restaurant.component.html',
  styleUrl: './dario_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioRestaurantComponent implements OnInit {
  public restaurants: Restaurant[] = [];
  public selectedItems = new Array<number>();
  public opened = false;

  public constructor(
    private restaurantService: RestaurantService,
    private cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.restaurantService
      .getRestaurants()
      .subscribe((restaurants: Restaurant[]) => {
        this.restaurants = restaurants;
        this.cdr.detectChanges();
      });
  }
  public removeSelectedRestaurants(): void {
    this.restaurantService.removeSelectedRestaurants(this.selectedItems);
  }

  public close(status: string): void {
    if (status) {
      this.removeSelectedRestaurants();
    }
    this.selectedItems = [];
    this.opened = false;
  }

  public open(): void {
    this.opened = true;
  }
}
