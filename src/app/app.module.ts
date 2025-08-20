import { NgModule, EnvironmentProviders, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader, TRANSLATE_HTTP_LOADER_CONFIG } from '@ngx-translate/http-loader';

import { AdminComponent } from './pages/admin/admin.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ManageProductsComponent } from './pages/admin/manage-products/manage-products.component';
import { AboutComponent } from './pages/about/about.component';
import { ManageUsersComponent } from './pages/admin/manage-users/manage-users.component';
import { ReviewDetailComponent } from './pages/review-detail/review-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

export function HttpLoaderFactory(): TranslateHttpLoader {
  return new TranslateHttpLoader();
}

export function provideTranslation(): EnvironmentProviders {
  return importProvidersFrom(
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
      }
    })
  );
}

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
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ShoppingCartComponent
  ],
  providers: [
    provideTranslation(),
    { provide: TRANSLATE_HTTP_LOADER_CONFIG, useValue: '/assets/i18n/' }
  ],
  bootstrap: []
})

export class AppModule { 
  
}
