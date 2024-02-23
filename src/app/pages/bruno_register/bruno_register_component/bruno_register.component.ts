import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { config } from '../../../configs/app.config';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { passwordRegex, usernameRegex } from '../../../common/regex_constants';

@Component({
  selector: 'app-bruno-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './bruno_register.component.html',
  styleUrl: './bruno_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoRegisterComponentComponent {
  public config = config;
  public fieldTextType: boolean = false;
  public form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern(usernameRegex),
    ]),
    password: new FormControl('', [
      Validators.minLength(8),
      Validators.pattern(passwordRegex),
      Validators.required,
    ]),
    confirmPassword: new FormControl('', [
      Validators.minLength(8),
      Validators.required,
      Validators.pattern(passwordRegex),
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
