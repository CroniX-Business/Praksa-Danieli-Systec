import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { DominikRestaurantComponent } from '../Dominik_restaurant/Dominik_restaurant.component';
import { DominikCategoryComponent } from '../Dominik_category/Dominik_category.component';

@Component({
  selector: 'app-dominik-main',
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterOutlet,
    RouterLink,
    DominikRestaurantComponent,
    DominikCategoryComponent,
  ],
  templateUrl: './Dominik_main.component.html',
  styleUrl: './Dominik_main.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikMainComponent {
  public routesConfig = AppRoutesConfig.routeConfig;
  public sidebar = false;
  public displayPage = 'Restaurant';
}
