import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutesConfig } from '../../configs/app-routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-bruno-restaurant',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './bruno_restaurant.component.html',
  styleUrl: './bruno_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoRestaurantComponent {
  public constructor(protected router: Router) {}

  protected routes = AppRoutesConfig;

  public logout(): void {
    this.router.navigate([this.routes.routeNames.login]);
    return;
  }
}
