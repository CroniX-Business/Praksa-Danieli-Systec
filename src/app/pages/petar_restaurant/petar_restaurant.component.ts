import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';
import { PetarHomepageComponent } from '../petar_homepage/petar_homepage.component';

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
    PetarHomepageComponent,
  ],
})
export class PetarRestaurantComponent {
  public AppRoutesConfig = AppRoutesConfig;
}
