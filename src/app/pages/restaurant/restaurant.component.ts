import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';
import { HomeComponent } from '../home/home.component';
@Component({
  selector: 'app-restaurant',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    HomeComponent,
  ],
  templateUrl: './restaurant.component.html',
  styleUrl: './restaurant.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RestaurantComponent {
  public routes = appRouteConfig;
}
