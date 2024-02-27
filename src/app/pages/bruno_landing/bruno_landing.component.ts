import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutesConfig } from '../../configs/app-routes.config';

@Component({
  selector: 'app-bruno-landing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bruno_landing.component.html',
  styleUrl: './bruno_landing.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLandingComponent {
  public constructor(private router: Router) {}

  private routes = AppRoutesConfig;

  public logout(): void {
    this.router.navigate([this.routes.routeNames.login]);
    return;
  }
}
