import { Component, inject } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  adminComponent = inject(AdminComponent)

  onAction() {
    this.adminComponent.incrementActions();
  }
}
