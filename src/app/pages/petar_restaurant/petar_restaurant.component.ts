import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-petar-restaurant',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './petar_restaurant.component.html',
  styleUrl: './petar_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarRestaurantComponent {}
