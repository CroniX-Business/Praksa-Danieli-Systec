import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { config } from '../../../configs/app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bruno-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bruno_register.component.html',
  styleUrl: './bruno_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoRegisterComponentComponent {
  public usernameRegex: RegExp = /^(?=.{4,20}$)[a-zA-Z0-9_.]+$/;
  public passwordRegex: RegExp =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{8,}$/;
  public config = config;
  public fieldTextType: boolean = false;
  public form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(this.usernameRegex),
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(this.passwordRegex),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
    ]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  public log(): void {
    console.log(this.form.get('username')!.value!);
    console.log(typeof this.form.get('username')!.value!);
  }
}
