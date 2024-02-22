import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DraganAuthService {
  public constructor() {}

  public authenticate(username: string, password: string): Observable<boolean> {
    console.log(username);
    console.log(password);

    return of(Math.random() >= 0.5);
  }
}
