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
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
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

      console.log(
        this.authService.logIn(
          this.registerGroup.controls.username.value,
          this.registerGroup.controls.password.value
        )
      );
    }
  }
}
