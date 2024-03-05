import { Injectable } from '@angular/core';
import { DraganAuthService } from '../services/dragan_auth.service';
import { appRouteConfig } from '../configs/routes.config';
import { Router } from '@angular/router';
@Injectable()
export class loginGuard {
  public constructor(
    private authService: DraganAuthService,
    private router: Router
  ) {}

  public canActivate(): boolean {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    this.router.navigate([appRouteConfig.routesConfig.login]);
    return false;
  }
}
