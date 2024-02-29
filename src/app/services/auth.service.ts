import { Injectable } from '@angular/core';
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

  public login(userName: string, userPass: string): boolean {
    console.log('User:' + userName + ' Pass:' + userPass);
    const result = Math.random() >= 0.5;
    if (result) {
      const validation = this.validateToken(this.jwt_Token);
      console.log(validation);
      if (validation != null) {
        return true;
      } else return false;
    } else return false;
  }
}
