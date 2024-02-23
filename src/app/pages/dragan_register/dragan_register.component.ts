import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { appConfig } from '../../configs/app.config';
import { ReactiveFormsModule } from '@angular/forms';
import { NameRegex } from '../../common/regex_constants';
import { EmailRegex } from '../../common/regex_constants';
@Component({
  selector: 'app-dragan-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dragan_register.component.html',
  styleUrl: './dragan_register.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganRegisterComponent {
  public passwordVisible: boolean = true;
  public appConfig = appConfig;

  public registerMessage: string | null = null;
  public myForm = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.pattern(NameRegex),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.pattern(NameRegex),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.pattern(EmailRegex),
    ]),
    username: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    repeatPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
  });
}
