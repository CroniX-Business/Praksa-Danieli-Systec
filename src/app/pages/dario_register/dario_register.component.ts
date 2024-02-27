import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AppConfig } from '../../configs/app.config';
import { AppLanguagesConfig } from '../../configs/app-languages.config';

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
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';

@Component({
  selector: 'app-dario-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
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

  public appRoutes = AppRoutesConfig.routes;

  public constructor() {}

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
}
