import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/JwtPayload';
import { Router } from '@angular/router';
import { appRouteConfig } from '../configs/routes.config';
import moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class DraganAuthService {
  public constructor(private router: Router) {}

  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.OujaXZN0F_7IiIAGRtxEYnrf3tTYXQc82ki3YzybJOw';

  private validateToken(token: string): JwtPayload | null {
    try {
      const decoded_token = jwtDecode(token) as JwtPayload;
      return decoded_token;
    } catch (e) {
      console.log('error', e);
      return null;
    }
  }

  public authenticate(username: string, password: string): Observable<boolean> {
    console.log(username, password);

    if (Math.random() >= 0.5) {
      const payload = this.validateToken(this.token);
      if (payload) {
        const currentTime = moment().unix();
        const timeoutTime = moment
          .unix(currentTime)
          .add(payload.expires_at, 'seconds')
          .unix();
        this.setSession(JSON.stringify(payload));
        this.setTimeout(timeoutTime);
        console.log('success');
        return of(true);
      }
    }
    return of(false);
  }

  private setTimeout(number: number): void {
    localStorage.setItem('timeout', number.toString());
  }

  private setSession(decoded_token: string): void {
    localStorage.setItem('payload', decoded_token);
  }

  public logout(): void {
    localStorage.removeItem('payload');
    localStorage.removeItem('timeout');

    this.router.navigate([appRouteConfig.routesConfig.login]);
  }

  private getTokenExpiration(): number {
    return +(localStorage.getItem('timeout') || 0);
  }

  public hasTokenExpired(): boolean {
    const tokenExpiration = this.getTokenExpiration();
    const currentUnixTime = moment().unix();

    const currentMoment = moment.unix(currentUnixTime);
    const tokenExpirationMoment = moment.unix(tokenExpiration);

    return tokenExpirationMoment.isBefore(currentMoment);
  }

  public isLoggedIn(): boolean {
    return !this.hasTokenExpired();
  }
}
