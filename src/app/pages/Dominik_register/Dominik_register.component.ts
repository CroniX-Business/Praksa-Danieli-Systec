import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../.././configs/app-languages.config';
import { appConfiguration } from '../.././configs/app.config';
import { RouterLinkActive, RouterOutlet, RouterLink } from '@angular/router';
import {
  emailRegex,
  passwordRegex,
  usernameRegex,
} from '../../regex_constants';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidatorFn,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-dominik-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './Dominik_register.component.html',
  styleUrl: './Dominik_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikRegisterComponent {
  public Lan = Languages;
  public showPassword = false;
  public appCnfg = appConfiguration;
  public loginMsg = '';
  public usernameMsg = '';
  public passwordMsg = '';
  public emailMsg = '';
  public unamePattern = '^[a-z0-9_-]{8,15}$';

  public patternWithMessage = (
    pattern: string | RegExp,
    message: string
  ): ValidatorFn => {
    const delegateFn = Validators.pattern(pattern);
    return control => (delegateFn(control) === null ? null : { message });
  };

  public applyform = new FormGroup({
    userFirstName: new FormControl('', Validators.required),
    userLastName: new FormControl('', Validators.required),
    userName: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(usernameRegex),
    ]),
    userPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
    ]),
    userPasswordConfirm: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
    ]),
    userEmail: new FormControl('', [
      Validators.required,
      Validators.pattern(emailRegex),
    ]),
  });

  public submitFunction(): void {}
}
