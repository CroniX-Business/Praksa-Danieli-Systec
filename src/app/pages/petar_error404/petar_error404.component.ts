import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';

@Component({
  selector: 'app-petar-error404',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './petar_error404.component.html',
  styleUrl: './petar_error404.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarError404Component {
  public appConfig = AppConfig;
  public appRoutesConfig = AppRoutesConfig;
}
