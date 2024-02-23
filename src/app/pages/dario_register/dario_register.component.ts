import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../configs/app.config';
import { AppLanguagesConfig } from '../../configs/app-languages.config';
import { AuthService } from '../../services/auth.service';
import {
  EmailRegex,
  NameRegex,
  PasswordRegex,
  UsernameRegex,
} from '../../common/regex_constants';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dario-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dario_register.component.html',
  styleUrl: './dario_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DarioRegisterComponent {
  public showPassword: boolean = false;
  public showConfirmPassword: boolean = false;

  public appCFG = AppConfig;
  public appLCFG = AppLanguagesConfig;
  public loginMessage: string | null = null;

  public constructor(private authService: AuthService) {}

  public registerGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(NameRegex),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(NameRegex),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(UsernameRegex),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(PasswordRegex),
    ]),
    confirmPassword: new FormControl('', [
      Validators.required,
      Validators.pattern(PasswordRegex),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EmailRegex),
    ]),
  });

  public onSubmit(): void {
    if (
      this.registerGroup.controls.username.value != null &&
      this.registerGroup.controls.password.value != null
    ) {
      this.authService
        .logIn(
          this.registerGroup.controls.username.value,
          this.registerGroup.controls.password.value
        )
        .subscribe(value => {
          if (value) {
            this.loginMessage = 'Login success!';
          } else this.loginMessage = 'Login failed!';
        });
    }
  }
}
