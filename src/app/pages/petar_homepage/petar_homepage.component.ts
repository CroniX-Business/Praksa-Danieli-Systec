import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';
import { PetarRestaurantComponent } from '../petar_restaurant/petar_restaurant.component';
import { PetarCategoryComponent } from '../petar_category/petar_category.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

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
  public authService = new AuthService(this.router);

  public constructor(private router: Router) {}

  @HostListener('document:click')
  public onGlobalClick(): void {
    if (this.authService.hasTokenExpired()) {
      this.authService.logOut();
    }
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
