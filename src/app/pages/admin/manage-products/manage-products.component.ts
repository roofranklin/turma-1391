import { Component, inject } from '@angular/core';
import { AdminComponent } from '../admin.component';

@Component({
  selector: 'app-manage-products',
  standalone: false,
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {
  adminComponent = inject(AdminComponent)

  onAction() {
    this.adminComponent.incrementActions();
  }
}
