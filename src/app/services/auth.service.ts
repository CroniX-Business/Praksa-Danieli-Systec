import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/JwtPayload';
import moment from 'moment';
import { AppRoutesConfig } from '../configs/routes.config';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public routesConfig = AppRoutesConfig;
  //jwt 10 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAifQ.YnIHeTs6BV7pRX6CpDmxkrvxS1CRdSYE-n7eTjD8IK0
  //jwt 1000 sec eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.a7oxY1v0hfTctwCHdqLS7dDSo7j4eP8Uw-2TrHgxdEg
  public jwt_Token: string =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAifQ.YnIHeTs6BV7pRX6CpDmxkrvxS1CRdSYE-n7eTjD8IK0';
  public decodedHeader = jwtDecode(this.jwt_Token);

  public validateToken(token: string): JwtPayload | null {
    const decodedToken = jwtDecode(token);
    if (token == null) return null;
    if (decodedToken) return decodedToken as JwtPayload;
    else return null;
  }
  public getTokenExpiration(): number {
    const expiresat = localStorage.getItem('Login_expire_time');
    if (expiresat) {
      const expiremoment: number = +expiresat;
      return expiremoment;
    } else return 0;
  }
  public hasTokenExpired(): boolean {
    const currentMoment = moment();
    const currentMoments = currentMoment.unix().toString();
    const expiretime = this.getTokenExpiration();
    const currentmoment: number = +currentMoments;
    if (expiretime < currentmoment) return false;
    else return true;
  }
  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token ? this.hasTokenExpired() : !this.hasTokenExpired();
  }
  public addSeconds(): void {
    const decodedToken = this.validateToken(this.jwt_Token);
    const loginmoment = moment();
    loginmoment.add(decodedToken?.expires_at, 'seconds');
    loginmoment.unix;
    localStorage.setItem('Login_expire_time', loginmoment.unix().toString());
  }
  public setSession(name: string, value: string): void {
    localStorage.setItem(name, value);
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
      if (validation != null) {
        this.setSession('token', this.jwt_Token);
        return true;
      } else return false;
    } else return false;
  }
}
