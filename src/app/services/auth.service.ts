import { Injectable } from '@angular/core';
import { JwtPayload, jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private constructor() {}
  private token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSJ9.nLQi-i-p8XX72uNiDTwXjg_NCyMy8fRuY8sQG7npR9Q';
  private payload = {
    issuer: 'Issuer',
    username: 'JavaInUse',
    role: 'Admin',
  };
  private expirationTime: number = 1000;
  public validateToken(token: string, username: string): JwtPayload | null {
    if (token == null) {
      return null;
    }
    this.setSession(username);
    return jwtDecode(token);
  }

  public getToken(): string {
    return this.token;
  }

  public setSession(name: string): void {
    localStorage.setItem(name, this.token);
  }
  public removeSession(name: string): void {
    localStorage.removeItem(name);
  }

  public loginMessage: string | null = null;
  public login(username: string, password: string): Observable<boolean> {
    console.log(username);
    console.log(password);
    return of(Math.random() >= 0.5);
  }
}
