import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';

@Component({
  selector: 'app-dominik-category',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterOutlet, RouterLink],
  templateUrl: './Dominik_category.component.html',
  styleUrl: './Dominik_category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikCategoryComponent {
  public routesConfig = AppRoutesConfig.routeConfig;
  public sidebar = false;
}
