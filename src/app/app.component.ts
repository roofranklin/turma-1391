import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, ShoppingCartComponent]
})
export class AppComponent {
  title = 'minha-loja';
}
