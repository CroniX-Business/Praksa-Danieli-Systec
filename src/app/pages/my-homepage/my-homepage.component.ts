import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';

@Component({
  selector: 'app-my-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './my-homepage.component.html',
  styleUrl: './my-homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyHomepageComponent {
  public routes = appRouteConfig.routesConfig;
}
