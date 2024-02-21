import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../configs/app.config';
import { AppLanguagesConfig } from '../../configs/app-languages.config';
import { AuthService } from '../../services/auth.service';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dario-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dario_login.component.html',
  styleUrl: './dario_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioLoginComponent {
  public showPassword: boolean = false;

  public appCFG = AppConfig;
  public appLCFG = AppLanguagesConfig;

  public constructor(private authService: AuthService) {}

  public loginGroup = new FormGroup({
    password: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    if (
      this.loginGroup.controls.username.value != null &&
      this.loginGroup.controls.password.value != null
    ) {
      this.authService.logIn(
        this.loginGroup.controls.username.value,
        this.loginGroup.controls.password.value
      );

      alert(
        'Username: ' +
          this.loginGroup.controls.username.value +
          ' ' +
          'Password: ' +
          this.loginGroup.controls.password.value
      );
    }
  }
}
