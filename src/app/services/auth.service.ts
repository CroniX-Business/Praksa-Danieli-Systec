import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor() {}

  private jwtToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTUifQ.RrvUhhztFRvg3LDpMbbMDFGRywKUa4ModOplpGph6VI';

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

  public checkExpirationDate(): boolean {
    const expirationDate = +(localStorage.getItem('expires_at') || '0');
    if (expirationDate > moment().unix()) return true;
    return false;
  }

  private setSession(decodedToken: JwtPayload): void {
    const loginMoment = moment();
    loginMoment.add(decodedToken?.expires_at, 'seconds');
    localStorage.setItem('expires_at', loginMoment.unix().toString());
  }
  public removeSession(): void {
    localStorage.removeItem('expires_at');
  }
}
