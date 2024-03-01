import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutesConfig } from '../../configs/app-routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-bruno-landing',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './bruno_landing.component.html',
  styleUrl: './bruno_landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLandingComponent {
  public constructor(
    protected router: Router,
    protected authService: AuthService
  ) {}

  protected routes = AppRoutesConfig;
  public logout(): void {
    this.authService.logout();
  }
}
