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
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AppRoutesConfig } from '../../config/routes.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-petar-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './petar_login.component.html',
  styleUrl: './petar_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PetarLoginComponent {
  public appConfig = AppConfig;
  public appLanguages = AppLanguages;
  public AppRoutesConfig = AppRoutesConfig;

  public show: boolean = true;
  public loginMessage: string = '';

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  public onSubmit(): void {
    if (
      this.loginForm.controls.username.value !== null &&
      this.loginForm.controls.password.value !== null
    ) {
      this.authService
        .login(
          this.loginForm.controls.username.value,
          this.loginForm.controls.password.value
        )
        .subscribe(value => {
          if (value) {
            this.router.navigate([AppRoutesConfig.routes.homepage]);
          } else {
            this.loginMessage = 'Login Failed';
          }
        });
    }
  }
}
