import { Routes } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ManageProductsComponent } from "./manage-products/manage-products.component";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-products', component: ManageProductsComponent },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  }
]