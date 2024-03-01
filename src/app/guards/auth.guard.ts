import { Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../configs/app-routes.config';
@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public canActivate: CanActivateFn = () => {
    if (this.authService.isLoggedIn()) {
      return false;
    } else {
      return this.router.navigate([AppRoutesConfig.routeNames.login]);
    }
  };
}
