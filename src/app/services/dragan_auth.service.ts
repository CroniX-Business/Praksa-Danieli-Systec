import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';

interface myJWTPayload {
  expires_at: number;
}
@Injectable({
  providedIn: 'root',
})
export class DraganAuthService {
  public constructor() {}
  private payload = {
    expires_at: 1000,
  };
  private token =
    'eyJhbGciOiJIUzI1NiJ9.eyJleHBpcmVzX2F0IjoiMTAwMCJ9.OujaXZN0F_7IiIAGRtxEYnrf3tTYXQc82ki3YzybJOw';

  private validateToken(token: string): myJWTPayload | null {
    try {
      const decoded_token = jwtDecode(token) as myJWTPayload;
      return decoded_token;
    } catch (e) {
      console.log('error', e);
      return null;
    }
  }
  public authenticate(username: string, password: string): Observable<boolean> {
    console.log(username, password);
    if (Math.random() >= 0.5) {
      const payload = this.validateToken(this.token);
      if (payload) {
        this.setSession(this.token);
        console.log('success');
        return of(true);
      }
    }
    return of(false);
  }

  public setSession(decoded_token: string): void {
    localStorage.setItem('token', decoded_token);
  }
  public logout(): void {
    localStorage.removeItem('token');
  }
}
