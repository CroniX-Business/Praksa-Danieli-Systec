import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dominik-main',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './Dominik_main.component.html',
  styleUrl: './Dominik_main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikMainComponent {
  public routesConfig = AppRoutesConfig;
  public constructor(
    public authService: AuthService,
    private router: Router
  ) {}
  public sidebar = false;
}
