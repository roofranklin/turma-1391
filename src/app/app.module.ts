import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

import { AppRoutingModule } from './app-routing.module';
import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManageProductsComponent } from './pages/admin/manage-products/manage-products.component';
import { AboutComponent } from './pages/about/about.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './pages/review-detail/review-detail.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
    ManageProductsComponent,
    AboutComponent,
    ManageUsersComponent,
    ReviewDetailComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ShoppingCartComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
