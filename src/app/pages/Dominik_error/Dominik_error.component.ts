import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { routesConfig } from '../../configs/routes.config';

@Component({
  selector: 'app-dominik-error',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, RouterOutlet],
  templateUrl: './Dominik_error.component.html',
  styleUrl: './Dominik_error.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikErrorComponent {
  public routesConfig = routesConfig;
}
