import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import { JwtPayload } from '../models/JwtPayload';
import { AppRoutesConfig } from '../config/routes.config';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(private router: Router) {}

  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTUifQ.RrvUhhztFRvg3LDpMbbMDFGRywKUa4ModOplpGph6VI';

  public login(username: string, password: string): Observable<boolean> {
    console.log('login', username, password);
    if (Math.random() >= 0.5) {
      const tokenPayload = this.validateToken(this.token);
      if (tokenPayload) {
        return of(true);
      }
    }
    return of(false);
  }

  private validateToken(token: string): JwtPayload | null {
    try {
      const payload = this.decodeToken(token);

      if (this.hasTokenExpired()) {
        this.logOut();
        return null;
      } else {
        return payload;
      }
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  private decodeToken(token: string): JwtPayload | null {
    try {
      const payload = jwtDecode(token) as JwtPayload;
      this.setSession(payload);

      return payload;
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  private hasTokenExpired(): boolean {
    const currentUnixTime = moment().unix();
    const tokenExpirationUnixTime = this.getTokenExpiration();

    const currentMoment = moment.unix(currentUnixTime);
    const tokenExpirationMoment = moment.unix(tokenExpirationUnixTime);

    return tokenExpirationMoment.isBefore(currentMoment);
  }

  private getTokenExpiration(): number {
    return +(localStorage.getItem('expireAt') || '0');
  }

  private setSession(payload: JwtPayload): void {
    const expiresAt = +moment().unix() + +payload.expires_at;
    localStorage.setItem('Payload', String(payload.expires_at));
    localStorage.setItem('expireAt', String(expiresAt));
  }

  public logOut(): void {
    this.removeSession();
    this.router.navigate([AppRoutesConfig.routes.login]);
  }

  private removeSession(): void {
    localStorage.removeItem('Payload');
    localStorage.removeItem('expireAt');
  }

  public isLoggedIn(): boolean {
    return !this.hasTokenExpired();
  }
}
