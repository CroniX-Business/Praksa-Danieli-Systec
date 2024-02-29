import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/JwtPayload';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor() {}

  private jwtToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg';

  public logIn(username: string, password: string): Observable<boolean> {
    console.log(username);
    console.log(password);
    const decodedToken = this.validateToken(this.jwtToken);
    if (decodedToken !== null) {
      this.setSession(decodedToken);
    }

    return of(Math.random() >= 0.5);
  }

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    try {
      return decodedToken as JwtPayload;
    } catch {
      return null;
    }
  }

  private setSession(decodedToken: JwtPayload): void {
    localStorage.setItem('value', decodedToken.expires_at.toString());
  }
  private removeSession(): void {
    localStorage.removeItem('value');
  }
}
