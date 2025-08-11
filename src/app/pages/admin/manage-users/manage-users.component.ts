import { Component, inject } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-manage-users',
  standalone: false,
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss'
})
export class ManageUsersComponent {
  adminComponent = inject(AdminComponent)

  onAction() {
    this.adminComponent.incrementActions();
  }
}
