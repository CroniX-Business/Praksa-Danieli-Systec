import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Languages } from '../../configs/app-languages.config';
import { appConfiguration } from '../../configs/app.config';
import { AuthService } from '../../services/auth.service';
import {
  Router,
  RouterLinkActive,
  RouterOutlet,
  RouterLink,
} from '@angular/router';
import { AppRoutesConfig } from '../../configs/routes.config';
import {
  FormsModule,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
@Component({
  selector: 'app-dominik-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './Dominik_login.component.html',
  styleUrl: './Dominik_login.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DominikLoginComponent {
  public routesConfig = AppRoutesConfig;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}
  public Lan = Languages;
  public showPassword = false;
  public appCnfg = appConfiguration;
  public loginMsg = '';

  public applyform = new FormGroup({
    userName: new FormControl(''),
    userPassword: new FormControl(''),
  });

  public submitFunction(): void {}
  public onSubmit(): void {
    if (
      this.applyform.controls.userName.value != null &&
      this.applyform.controls.userPassword.value != null
    )
      this.authService
        .login(
          this.applyform.controls.userName.value,
          this.applyform.controls.userPassword.value
        )
        .subscribe(value => {
          if (value) {
            this.router.navigate([
              this.routesConfig.routeConfig.main,
              this.routesConfig.routeNames.restaurants,
            ]);
          } else {
            this.loginMsg = 'Login failed!';
          }
        });
  }
}
// function type(decodedHeader: JwtPayload): any {
//   throw new Error('Function not implemented.');
// }
