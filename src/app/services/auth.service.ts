import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';
import { Router } from '@angular/router';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public constructor(private router: Router) {}
  public routesConfig = AppRoutesConfig;
  //jwt 10 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAifQ.YnIHeTs6BV7pRX6CpDmxkrvxS1CRdSYE-n7eTjD8IK0
  //jwt 1000 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg
  public jwt_Token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg';

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    if (decodedToken) return decodedToken as JwtPayload;
    else return null;
  }

  private getTokenExpiration(): string {
    const expiresat = localStorage.getItem('Login_expire_time');
    if (expiresat) {
      return expiresat;
    } else return '0';
  }

  private hasTokenExpired(): boolean {
    const currentMoment = moment(new Date()).format();
    const currentmoment = currentMoment.toString();
    const expiretime = this.getTokenExpiration();
    return !moment(expiretime).isBefore(currentmoment);
  }

  public isLoggedIn(): boolean {
    return !this.hasTokenExpired();
  }

  private setSession(payload: JwtPayload): void {
    localStorage.setItem(
      'Login_expire_time',
      moment(new Date()).add(payload.expires_at, 'seconds').format().toString()
    );
  }

  public removeSession(): void {
    localStorage.removeItem('Login_expire_time');
  }

  public logOut(): void {
    this.removeSession();
    this.router.navigate([this.routesConfig.routeConfig.login]);
  }

  public login(userName: string, userPass: string): boolean {
    console.log('User:' + userName + ' Pass:' + userPass);
    const result = Math.random() >= 0.5;
    if (result) {
      const validation = this.validateToken(this.jwt_Token);
      if (validation != null) {
        this.setSession(jwtDecode(this.jwt_Token));
        return true;
      } else return false;
    } else return false;
  }
}
