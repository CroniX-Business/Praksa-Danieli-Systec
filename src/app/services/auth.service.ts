import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

interface CustomJwtPayload {
  expires_at: number;
}
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg';

  private validateToken(token: string): CustomJwtPayload | null {
    try {
      const payload = jwtDecode(token) as CustomJwtPayload;
      return payload;
    } catch (e) {
      console.error('Error decoding token:', e);
      return null;
    }
  }
  public login(username: string, password: string): Observable<boolean> {
    console.log('login', username, password);
    if (Math.random() >= 0.5) {
      const tokenPayload = this.validateToken(this.token);
      if (tokenPayload) {
        localStorage.setItem('token', this.token);
        console.log('User authenticated:', tokenPayload.expires_at);
        return of(true);
      }
    }
    console.log('Authentication failed.');
    return of(false);
  }

  public logout(): void {
    localStorage.removeItem('token');
  }
}
