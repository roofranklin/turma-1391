import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-admin',
  standalone: false,
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  subRoutes = [
    { path: 'dashboard', label: 'Dashboard' },
    { path: 'manage-users', label: 'Gerenciar Usuários' },
    { path: 'manage-products', label: 'Gerenciar Produtos' }
  ]

  actionCount = signal(0);

  actionMessage = computed(() => {
    if (this.actionCount() > 0) {
      return `Aconteceu ${this.actionCount()} ações no painel de administração!`;
    } else {
      return 'Nenhuma ação detectada no painel de administração.';
    }
  });

  incrementActions() {
    this.actionCount.update(count => count + 1);
  }
}
