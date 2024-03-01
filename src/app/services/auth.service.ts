import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';
import { JwtPayload } from '../models/JwtPayload';
import { AppRoutesConfig } from '../config/routes.config';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AppRoutesConfig = AppRoutesConfig;

  public constructor() {}

  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMzAifQ.7SZiZ6cpdJyemU-z38u9KbMJ0jOeS4QZ--Dmp_GVjN4';

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
      const payload = jwtDecode(token) as JwtPayload;

      const expiresAt = +moment().unix() + +payload.expires_at;
      this.setSession('expireAt', String(expiresAt));
      this.setSession('token', this.token);

      if (this.hasTokenExpired()) {
        return payload;
      } else {
        console.log('Token has expired');
        this.logOut();
        return null;
      }
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
  public hasTokenExpired(): boolean {
    if (this.getTokenExpiration() > +moment().unix()) {
      return true;
    }
    return false;
  }

  public getTokenExpiration(): number {
    return +(localStorage.getItem('expireAt') || '0');
  }
  private setSession(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  public logOut(): void {
    this.removeSession();
  }

  private removeSession(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('expireAt');
  }

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? this.validateToken(token) !== null : false;
  }
}
