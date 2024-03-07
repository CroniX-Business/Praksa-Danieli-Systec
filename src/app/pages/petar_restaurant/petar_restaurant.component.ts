import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { GridModule } from '@progress/kendo-angular-grid';
import { RestaurantService } from '../../services/restaurant.service';
import { Restaurant } from '../../models/Restaurant';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    ButtonsModule,
    DialogsModule,
    ReactiveFormsModule,
  ],
})
export class PetarRestaurantComponent implements OnInit {
  public gridData: Restaurant[] = [];
  public restaurantIDs: Array<number> = [];

  public constructor(private restaurantService: RestaurantService) {}

  public openedDel = false;
  public openedAdd = false;

  public openDel(): void {
    this.openedDel = true;
  }

  public openAdd(): void {
    this.openedAdd = true;
  }

  public addRestaurantFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
  });

  public addRestaurant(status: boolean): void {
    if (
      status === true &&
      this.addRestaurantFormGroup.controls.name.value !== null &&
      this.addRestaurantFormGroup.controls.address.value !== null &&
      this.addRestaurantFormGroup.controls.phoneNumber.value !== null
    ) {
      this.restaurantService
        .addRestaurants(
          this.addRestaurantFormGroup.controls.name.value,
          this.addRestaurantFormGroup.controls.address.value,
          this.addRestaurantFormGroup.controls.phoneNumber.value
        )
        .subscribe(value => {
          console.log(value);
        });
    }
    this.openedAdd = false;
  }

  public ngOnInit(): void {
    this.loadData();
  }

  public loadData(): void {
    this.restaurantService
      .getRestaurantsForGrid()
      .subscribe((restaurants: Restaurant[]) => {
        this.gridData = restaurants;
      });
  }

  public deleteRestaurant(status: boolean): void {
    if (status === true) {
      this.restaurantService.deleteRestaurants(this.restaurantIDs);
    }
    this.openedDel = false;
  }
}
