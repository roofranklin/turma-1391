import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { ManageProductsComponent } from './pages/admin/manage-products/manage-products.component';
import { AboutComponent } from './pages/about/about.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './pages/review-detail/review-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    NotFoundComponent,
    AdminComponent,
    DashboardComponent,
    ManageProductsComponent,
    AboutComponent,
    ManageUsersComponent,
    ReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
