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

  private getToken(): string {
    return this.token;
  }

  private checkIfValid(): boolean {
    const token = this.getToken();
    const validated = this.validateToken(token);
    const time = moment().unix();
    if (time > validated!.exp) {
      return true;
    } else return false;
  }

  private getTokenExpiration(): number {
    const stringTime = localStorage.getItem('value');
    return parseInt(stringTime!);
  }

  private hasTokenExpired(): boolean {
    const time = moment().unix();
    const exp_time = this.getTokenExpiration();
    if (time > exp_time) {
      return true;
    } else return false;
  }

  public isLoggedIn(): boolean {
    if (this.hasTokenExpired()) {
      return false;
    }
    return true;
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
            validated!.exp = time.exp;
            localStorage.setItem('value', validated!.exp.toString());
            observer.next(true);
            observer.complete();
          } catch (error) {
            console.log(error);
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
    localStorage.removeItem('value');
  }
}
