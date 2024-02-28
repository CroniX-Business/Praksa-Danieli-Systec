import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-petar-restaurant',
  standalone: true,
  templateUrl: './petar_restaurant.component.html',
  styleUrl: './petar_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export class PetarRestaurantComponent {}
