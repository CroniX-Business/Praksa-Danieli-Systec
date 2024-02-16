import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../config/app.config';
import { AppLanguages } from '../../config/app.languages';

@Component({
  selector: 'app-petar-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './petar_login.component.html',
  styleUrl: './petar_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarLoginComponent {
  appConfig = AppConfig;
  appLanguages = AppLanguages;

  show: boolean = true;
  togglePasswordVisibility() {
    this.show = !this.show;    
  }
}
