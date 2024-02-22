import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private constructor() {}
  public loginMessage: string | null = null;
  public login(username: string, password: string): Observable<boolean> {
    console.log(username);
    console.log(password);
    console.log('Success');
    return of(Math.random() >= 0.5);
  }
}
