import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { appConfig } from '../../configs/app.config';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { DraganAuthService } from '../../services/dragan_auth.service';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { appRouteConfig } from '../../configs/routes.config';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dragan-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './dragan_login.component.html',
  styleUrl: './dragan_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DraganLoginComponent {
  public loginMessage: string | null = null;
  public constructor(
    private authService: DraganAuthService,
    private router: Router
  ) {}
  public routes = appRouteConfig;
  public myForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  public passwordVisible: boolean = false;
  public appConfig = appConfig;

  public onSubmit(): void {
    if (
      this.myForm.controls.username.value !== null &&
      this.myForm.controls.password.value !== null
    ) {
      this.authService
        .authenticate(
          this.myForm.controls.username.value,
          this.myForm.controls.password.value
        )
        .subscribe(value => {
          if (value) {
            this.router.navigate([this.routes.routesConfig.home]);
          } else this.loginMessage = 'Login failed!';
        });
    }
  }
}
