import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';
import { PetarRestaurantComponent } from '../petar_restaurant/petar_restaurant.component';
import { PetarCategoryComponent } from '../petar_category/petar_category.component';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-petar-homepage',
  standalone: true,
  templateUrl: './petar_homepage.component.html',
  styleUrl: './petar_homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    PetarRestaurantComponent,
    PetarCategoryComponent,
  ],
})
export class PetarHomepageComponent {
  public AppRoutesConfig = AppRoutesConfig;

  public constructor(private authService: AuthService) {}

  public logOut(): void {
    this.authService.removeSession();
  }
}
