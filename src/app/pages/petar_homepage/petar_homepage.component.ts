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
  public authService = new AuthService();

  public constructor(private router: Router) {}

  @HostListener('window:beforeunload', ['$event'])
  public onBeforeUnload(): void {
    if (!this.authService.hasTokenExpired()) {
      this.authService.logOut();
      this.router.navigate([AppRoutesConfig.routes.login]);
    }
  }

  @HostListener('document:click', ['$event'])
  public onGlobalClick(): void {
    if (!this.authService.hasTokenExpired()) {
      this.authService.logOut();
      this.router.navigate([AppRoutesConfig.routes.login]);
    }
  }

  public logOut(): void {
    this.authService.logOut();
  }
}
