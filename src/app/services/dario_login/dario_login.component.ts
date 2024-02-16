import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../../app/configs/app.config';
import { AppLanguagesConfig } from '../../../app/configs/app-languages.config';

@Component({
  selector: 'app-dario-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './dario_login.component.html',
  styleUrl: './dario_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioLoginComponent {

  showPassword: Boolean = false;

  appCFG = AppConfig;
  appLCFG = AppLanguagesConfig;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

 }
