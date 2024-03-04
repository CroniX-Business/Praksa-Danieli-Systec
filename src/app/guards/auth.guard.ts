import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  public constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  public canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate([AppRoutesConfig.routeNames.login]);
      return false;
    }
  }
}
