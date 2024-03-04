import { Injectable } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable()
export class AuthGuard {
  public AppRoutesConfig = AppRoutesConfig;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate: CanActivateFn = () => {
    if (!this.authService.isLoggedIn()) {
      this.authService.removeSession();
      this.router.navigate([AppRoutesConfig.routeNames.login]);
      return false;
    }
    return true;
  };
}
