import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppRoutesConfig } from '../../configs/routes.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dario-category',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './dario_category.component.html',
  styleUrl: './dario_category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioCategoryComponent {
  public appRoutes = AppRoutesConfig.routes;
}
