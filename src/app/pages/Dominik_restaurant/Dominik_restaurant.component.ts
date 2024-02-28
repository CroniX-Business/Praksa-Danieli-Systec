import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';

@Component({
  selector: 'app-dominik-restaurant',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './Dominik_restaurant.component.html',
  styleUrl: './Dominik_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikRestaurantComponent {
  public routesConfig = AppRoutesConfig.routeConfig;
  public sidebar = false;
}
