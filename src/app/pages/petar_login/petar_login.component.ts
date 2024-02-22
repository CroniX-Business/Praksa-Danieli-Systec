import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AppConfig } from '../../config/app.config';
import { AppLanguages } from '../../config/app.languages';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-petar-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './petar_login.component.html',
  styleUrl: './petar_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarLoginComponent {
  public AuthService: AuthService;
  public appConfig = AppConfig;
  public appLanguages = AppLanguages;

  public show: boolean = true;
  public loginMessage: string = '';

  public constructor(authService: AuthService) {
    this.AuthService = authService;
  }

  public applyForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    if (
      this.applyForm.controls.username.value !== null &&
      this.applyForm.controls.password.value !== null
    ) {
      this.AuthService.login(
        this.applyForm.controls.username.value,
        this.applyForm.controls.password.value
      ).subscribe(value => {
        if (value) {
          this.loginMessage = 'Login success';
        } else {
          this.loginMessage = 'Login Failed';
        }
      });
    }
  }
}
