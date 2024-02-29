import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { JwtPayload, jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public jwt_Token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg';
  public decodedHeader = jwtDecode(this.jwt_Token);

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    if (decodedToken) return decodedToken;
    else return null;
  }

  public setSession(name: string): void {
    localStorage.setItem(name, this.jwt_Token);
  }
  public removeSession(name: string): void {
    localStorage.removeItem(name);
  }

  public login(userName: string, userPass: string): Observable<boolean> {
    console.log('User:' + userName + ' Pass:' + userPass);
    return of(Math.random() >= 0.5);
  }
  public constructor() {}
}
