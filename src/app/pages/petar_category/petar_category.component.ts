import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';
import { PetarHomepageComponent } from '../petar_homepage/petar_homepage.component';

@Component({
  selector: 'app-petar-category',
  standalone: true,
  templateUrl: './petar_category.component.html',
  styleUrl: './petar_category.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    PetarHomepageComponent,
  ],
})
export class PetarCategoryComponent {
  public AppRoutesConfig = AppRoutesConfig;
}
