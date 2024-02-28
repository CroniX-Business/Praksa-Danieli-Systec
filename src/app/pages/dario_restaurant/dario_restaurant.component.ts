import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dario-restaurant',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dario_restaurant.component.html',
  styleUrl: './dario_restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioRestaurantComponent {
  public appRoutes = AppRoutesConfig.routes;
}
