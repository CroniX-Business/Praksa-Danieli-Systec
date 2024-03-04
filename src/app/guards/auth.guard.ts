import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../config/routes.config';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard {
  public constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  public canActivate: CanActivateFn = () => {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate([AppRoutesConfig.routeNames.login]);
    return false;
  };
}
