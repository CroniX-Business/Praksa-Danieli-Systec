import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../config/routes.config';

@Injectable()
export class AuthGuard {
  public AppRoutesConfig = AppRoutesConfig;

  public constructor(private authService: AuthService) {}

  public canActivate: CanActivateFn = () => {
    if (this.authService.isLoggedIn()) {
      return false;
    }
    return true;
  };
}
