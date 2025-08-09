import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ReviewsComponent } from '../../components/reviews/reviews.component';
import { CartService, Product } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [ReviewsComponent, RouterModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(`Product ID na rota: ${id}`);

    // Simulando a busca do produto por ID
    if(!isNaN(id)) {
      this.product = {
        id: id,
        name: `Product ${id}`,
        price: 50 * id // Exemplo de preço
      };
    }
    console.log(`Produto carregado: ${this.product?.name}`);
  }
  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      console.log(`Produto adicionado ao carrinho: ${this.product.name}`);
    }
}
}
