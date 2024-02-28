import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';

@Component({
  selector: 'app-petar-homepage',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './petar_homepage.component.html',
  styleUrl: './petar_homepage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarHomepageComponent {
  public AppRoutesConfig = AppRoutesConfig;
}
