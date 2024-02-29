import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
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
  public constructor(private authService: DraganAuthService) {}

  public onLogout(): void {
    this.authService.logout();
  }
}
