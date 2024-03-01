import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';
import { AppRoutesConfig } from '../configs/routes.config';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public routesConfig = AppRoutesConfig;
  public constructor(private router: Router) {}

  public jwt_Token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg';
  public decodedHeader = jwtDecode(this.jwt_Token);

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    if (decodedToken) return decodedToken as JwtPayload;
    else return null;
  }

  public checkExpire(): void {
    const expiresat = localStorage.getItem('Login_expire_time');
    if (expiresat) {
      const currentMoment = moment();
      const currentMoments = currentMoment.unix().toString();
      const expiremoment: number = +expiresat;
      const currentmoment: number = +currentMoments;
      if (currentmoment > expiremoment) {
        localStorage.removeItem('Login_expire_time');
        this.router.navigate([this.routesConfig.routeConfig.login]);
      }
    }
  }

  public addSeconds(): void {
    const decodedToken = this.validateToken(this.jwt_Token);
    const loginmoment = moment();
    console.log(loginmoment);
    loginmoment.add(decodedToken?.expires_at, 'seconds');
    loginmoment.unix;
    console.log(loginmoment);
    localStorage.setItem('Login_expire_time', loginmoment.unix().toString());
  }

  public setSession(name: string): void {
    localStorage.setItem(name, this.jwt_Token);
  }
  public removeSession(name: string): void {
    localStorage.removeItem(name);
  }

  public login(userName: string, userPass: string): boolean {
    console.log('User:' + userName + ' Pass:' + userPass);
    this.addSeconds();
    const result = Math.random() >= 0.5;
    if (result) {
      const validation = this.validateToken(this.jwt_Token);
      console.log(validation);
      if (validation != null) {
        this.setSession(this.jwt_Token);
        return true;
      } else return false;
    } else return false;
  }
}
