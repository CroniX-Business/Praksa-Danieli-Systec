import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public canActivate(): boolean {
    const routesConfig = AppRoutesConfig;
    if (this.authService.isLoggedIn()) return true;
    else {
      this.router.navigate([routesConfig.routeConfig.login]);
      return false;
    }
  }
}
