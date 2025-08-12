import { Injectable, signal, computed } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  // só o serviço pode alterar os itens do carrinho
  private cartItems = signal<Product[]>([]);

  // signals públicos
  public readonly items = this.cartItems.asReadonly();
  public readonly totalItems = computed(() => this.cartItems().length);
  public readonly totalPrice = computed (() => {
    return this.cartItems().reduce((total, item) => total + item.price, 0);
  });

  addToCart(product: Product) {
    this.cartItems.update(items => [...items, product]);
    console.log(`Produto adicionado: ${product.title}`);
  }
}
