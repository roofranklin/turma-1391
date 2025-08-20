import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from './components/language-switcher/language-switcher.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [
    RouterModule,
    ShoppingCartComponent,
    CommonModule,
    TranslateModule,
    LanguageSwitcherComponent
  ],
})
export class AppComponent {
  title = 'minha-loja';

  constructor(
    private router: Router, 
    public authService: AuthService,
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('pt');
    this.translate.use('pt');
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
