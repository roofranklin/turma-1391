import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private apiUrl = 'https://fakestoreapi.com/auth/login';


  login(credentials: { username: string, password: string }) {
    return this.http.post<{ token: string }>(this.apiUrl, credentials).pipe(
      tap(response => {
        // Armazenar o token no localStorage
        localStorage.setItem('token', response.token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
  logout() {
    localStorage.removeItem('token');
  }
  
}
