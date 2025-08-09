import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  subRoutes = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'manage-products', label: 'Gerenciar Produtos' },
    { path: 'users', label: 'Gerenciar Usuários' }
  ];

  actionCount = signal(0);
  actionMessage = computed(() => {
    if (this.actionCount() === 0) {
      return 'Nenhuma ação realizada';
    }
    return `Ações realizadas: ${this.actionCount()}`;
  });

  incrementActions() {
    this.actionCount.update(count => count + 1);
  }
}
