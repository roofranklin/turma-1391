import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  credentials = {
    username: '',
    password: ''
  };

  private authService = inject(AuthService);
  private router = inject(Router);

  login() {
    this.authService.login(this.credentials).subscribe(() => {
      next: () => {
        // Redirecionar para a página de admin
        this.router.navigate(['/admin']);
      }
      error: (err: any) => {
        console.error('Login failed', err);
        // Aqui você pode adicionar lógica para exibir uma mensagem de erro ao usuário
      }
    });
  }
}
