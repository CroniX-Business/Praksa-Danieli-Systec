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
  private AppRoutesConfig = AppRoutesConfig;

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
    console.log('Authentication failed.');
    return of(false);
  }

  private validateToken(token: string): JwtPayload | null {
    try {
      const payload = this.decodeToken(token);

      if (this.hasTokenExpired()) {
        console.log('Token has expired');
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

      const expiresAt = +moment().unix() + +payload.expires_at;
      this.setSession('expireAt', String(expiresAt));
      this.setSession('token', this.token);

      return payload;
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }

  public hasTokenExpired(): boolean {
    const currentUnixTime = moment().unix();
    const tokenExpirationUnixTime = this.getTokenExpiration();

    const currentMoment = moment.unix(currentUnixTime);
    const tokenExpirationMoment = moment.unix(tokenExpirationUnixTime);

    return tokenExpirationMoment.isBefore(currentMoment);
  }

  public getTokenExpiration(): number {
    return +(localStorage.getItem('expireAt') || '0');
  }

  private setSession(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public logOut(): void {
    this.removeSession();
    this.router.navigate([AppRoutesConfig.routes.login]);
  }

  private removeSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expireAt');
  }

  public isLoggedIn(): boolean {
    return this.hasTokenExpired();
  }
}
