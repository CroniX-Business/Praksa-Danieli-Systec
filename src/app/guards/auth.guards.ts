import { Injectable } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DraganAuthService } from '../services/dragan_auth.service';
import { appRouteConfig } from '../configs/routes.config';

@Injectable()
export class loginGuard {
  public AppRoutesConfig = appRouteConfig;

  public constructor(private authService: DraganAuthService) {}

  public canActivate: CanActivateFn = () => {
    if (this.authService.isLoggedIn()) {
      return true;
    }
    return false;
  };
}
