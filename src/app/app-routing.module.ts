import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { AboutComponent } from './pages/about/about.component';

import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ManageProductsComponent } from './pages/admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './pages/review-detail/review-detail.component';

import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'products/:id', component: ProductDetailComponent },
  { path: 'products/:id/reviews/:reviewId', component: ReviewDetailComponent },
  { path: 'about', component: AboutComponent },

  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'manage-products', component: ManageProductsComponent },
      { path: 'users', component: ManageUsersComponent }
    ] 
  },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
