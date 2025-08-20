import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  user: string;
}

export const adminGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    const token = authService.getToken();
    if (token) {
      try {
        const decodedToken: JwtPayload = jwtDecode(token);
        if (decodedToken.user === 'johnd') {
          return true;
        }
      } catch (error) {
        console.error('Erro ao decodificar o token:', error);
      }
    }
  }
  router.navigate(['/login']);
  return false;

};
