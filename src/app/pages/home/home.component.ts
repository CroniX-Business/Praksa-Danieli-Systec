import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';
import {
  RouterLink,
  RouterOutlet,
  RouterLinkActive,
  Router,
} from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';
import { DraganAuthService } from '../../services/dragan_auth.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  public routes = appRouteConfig;
  public authService = new DraganAuthService(this.router);
  public constructor(private router: Router) {}
  public onLogout(): void {
    this.authService.logout();
  }

  @HostListener('document:click')
  public checkLoginStatus(): void {
    if (!this.authService.isLoggedIn()) {
      this.authService.logout();
    }
  }
}
