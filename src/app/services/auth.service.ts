import { Injectable, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';
  private platformId = inject(PLATFORM_ID);


  login(credentials: { username: string, password: string }) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        // Armazenar o token no localStorage
         if(isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
         }
      })
    );
  }

  getToken(): string | null {
    if(isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getUserName(): string | null {
    const token = this.getToken();
    if (token) {
      const payload = token.split('.')[1];
      const decodedPayload = atob(payload);
      const userObj = JSON.parse(decodedPayload);
      return userObj.user;
    }
    return null;
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  logout() {
     if(isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
     }
  }
  
}
