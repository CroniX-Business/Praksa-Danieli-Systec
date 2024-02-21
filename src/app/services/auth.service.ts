import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public login(userName: string, userPass: string): void {
    console.log('Loggin through!');
    const access = Math.floor(Math.random() * 2);
    if (access == 0)
      console.log('Accessed: User:' + userName + ' Pass:' + userPass);
    else console.log('Unaccessed: User:' + userName + ' Pass:' + userPass);
  }
  public constructor() {}
}
