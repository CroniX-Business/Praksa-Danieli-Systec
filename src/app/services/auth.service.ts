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
  private token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NDUzMzYzNTR9.YNXiEzfpvkQsoHJyoaS6OBp28hLfzw9Qt2Jx2FOj1hc';
  public loginMessage: string | null = null;
  private validateToken(token: string): JwtPayload | null {
    if (token == null) {
      return null;
    }
    try {
      const decoded = jwtDecode(token) as JwtPayload;
      return decoded;
    } catch (error) {
      console.log(error);
    }
    return null;
  }

  private setSession(value: string, token: string): void {
    localStorage.setItem(value, token);
  }

  private removeSession(value: string): void {
    localStorage.removeItem(value);
  }

  private getTokenExpiration(): number {
    const stringTime = localStorage.getItem('value');
    if (stringTime !== null) {
      return parseInt(stringTime);
    }
    return 0;
  }

  private hasTokenExpired(): boolean {
    const time = moment().unix();
    const exp_time = this.getTokenExpiration();
    if (exp_time === undefined || Number.isNaN(exp_time)) {
      return true;
    }
    if (moment(time).isBefore(exp_time)) {
      return false;
    }
    return true;
  }

  public isLoggedIn(): boolean {
    return !this.hasTokenExpired();
  }

  public login(username: string, password: string): Observable<boolean> {
    console.log(password);
    console.log(username);
    const random = of(Math.random() >= 0.5);
    return new Observable<boolean>(observer => {
      random.subscribe(value => {
        if (value) {
          try {
            const validated = this.validateToken(this.token);
            const time = new JwtPayload();
            if (validated !== null) {
              validated.exp = time.exp;
              this.setSession('value', validated.exp.toString());
              observer.next(true);
              observer.complete();
            }
            observer.next(false);
            observer.complete();
          } catch (error) {
            observer.next(false);
            observer.complete();
          }
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }
  public logout(): void {
    this.removeSession('value');
  }
}
