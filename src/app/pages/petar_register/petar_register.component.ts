import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppConfig } from '../../config/app.config';
import {
  passwordRegex,
  usernameRegex,
  emailRegex,
  whitespaceRegex,
} from '../../common/regex_constants';

@Component({
  selector: 'app-petar-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './petar_register.component.html',
  styleUrl: './petar_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarRegisterComponent {
  public appConfig = AppConfig;

  public show: boolean = true;
  public showRepeat: boolean = true;

  public registerForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(whitespaceRegex),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(whitespaceRegex),
    ]),
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(20),
      Validators.pattern(usernameRegex),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(emailRegex),
    ]),
  });

  public onSubmit(): void {
    console.log(this.registerForm.controls.firstName.value);
    console.log(this.registerForm.controls.lastName.value);
    console.log(this.registerForm.controls.username.value);
    console.log(this.registerForm.controls.password.value);
    console.log(this.registerForm.controls.repeatPassword.value);
    console.log(this.registerForm.controls.email.value);
  }
}
