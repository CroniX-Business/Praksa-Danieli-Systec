import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(userName: string, userPass: string): Observable<boolean> {
    console.log('User:' + userName + ' Pass:' + userPass);
    return of(Math.random() >= 0.5);
  }
  public constructor() {}
}
