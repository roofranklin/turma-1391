import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { AppComponent } from './app/app.component';
import { HomeComponent } from './app/pages/home/home.component';
import { ProductsComponent } from './app/pages/products/products.component';
import { ProductDetailComponent } from './app/pages/product-detail/product-detail.component';
import { AboutComponent } from './app/pages/about/about.component';
import { AdminComponent } from './app/pages/admin/admin.component';
import { DashboardComponent } from './app/pages/admin/dashboard/dashboard.component';
import { ManageProductsComponent } from './app/pages/admin/manage-products/manage-products.component';
import { ManageUsersComponent } from './app/pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './app/pages/review-detail/review-detail.component';
import { NotFoundComponent } from './app/pages/not-found/not-found.component';

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

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
}).catch(err => console.error(err));
