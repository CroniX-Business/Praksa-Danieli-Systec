import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgFor } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { config } from '../../configs/app.config';
import { languages } from '../../configs/app-languages.config';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Router } from '@angular/router';
import { AppRoutesConfig } from '../../configs/app-routes.config';

@Component({
  selector: 'app-bruno-login',
  standalone: true,
  imports: [CommonModule, NgFor, ReactiveFormsModule, RouterModule],
  templateUrl: './bruno_login.component.html',
  styleUrl: './bruno_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrunoLoginComponent {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  public time = new Date();
  public form = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, [Validators.required]),
  });
  public routes = AppRoutesConfig;
  public config = config;
  public languages = languages;
  public fieldTextType: boolean = false;
  public loginMessage: string | null = null;

  public toggleFieldTextType(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  public onSubmit(): void {
    console.log(this.form.value);
    if (
      this.form.controls.username.value != null &&
      this.form.controls.password.value != null
    ) {
      this.authService
        .login(
          this.form.controls.username.value,
          this.form.controls.password.value
        )
        .subscribe(value => {
          if (value) {
            this.loginMessage = 'Login successful.';
            if (
              this.authService.validateToken(
                this.authService.getToken(),
                this.form.controls.username.value!
              )
            ) {
              console.log('Token successfully validated!');
              this.router.navigate([this.routes.routeNames.landing]);
            }
          } else {
            this.loginMessage = 'Login failed.';
          }
        });
    }
  }
}
