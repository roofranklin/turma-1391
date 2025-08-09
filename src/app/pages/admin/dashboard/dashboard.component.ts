import { Component, inject } from '@angular/core';
import { ReportsComponent } from '../../../components/reports/reports.component';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [ReportsComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  adminComponent = inject(AdminComponent);

  onAction() {
    this.adminComponent.incrementActions();
  }
}
