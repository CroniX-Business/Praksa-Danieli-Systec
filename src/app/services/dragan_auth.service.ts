import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';
@Injectable({
  providedIn: 'root',
})
export class DraganAuthService {
  public constructor() {}

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
        this.setSession(this.token);
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
    localStorage.setItem('token', decoded_token);
  }
  public logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('timeout');
  }
  public getTokenExpiration(): string | null {
    return localStorage.getItem('timeout');
  }
  public hasTokenExpired(): boolean {
    const tokenExpiration = this.getTokenExpiration();
    if (tokenExpiration) {
      const numTokenExpiration = parseInt(tokenExpiration);
      const currentTime = moment().unix();
      if (numTokenExpiration < currentTime) {
        return true;
      } else return false;
    }
    return true;
  }
  public isLoggedIn(): boolean {
    return this.hasTokenExpired();
  }
}
