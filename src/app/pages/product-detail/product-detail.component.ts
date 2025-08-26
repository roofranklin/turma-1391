import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { ProductService } from '../../services/product.service';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReviewsComponent, RouterModule, CommonModule, TranslateModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent {

  private productService = inject(ProductService);
  private cartService = inject(CartService);
  private route = inject(ActivatedRoute);

  public product = toSignal(
    this.route.paramMap.pipe(
      map(params => Number(params.get('id'))),
      switchMap(id => this.productService.getProductById(id))
    )
  );

  addToCart(): void {
  const product = this.product();
  if (product) {
    this.cartService.addToCart(product);
    console.log(`Produto adicionado ao carrinho: ${product.title}`);
  }
}
}
