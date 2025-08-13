import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManageProductsComponent } from './pages/admin/manage-products/manage-products.component';
import { AboutComponent } from './pages/about/about.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './pages/review-detail/review-detail.component';
import { CategoryListComponent } from './components/category-list/category-list.component';

@NgModule({
  declarations: [
    HomeComponent,
    NotFoundComponent,
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
  bootstrap: []
})
export class AppModule { }
