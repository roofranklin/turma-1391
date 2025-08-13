import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';
import { RouterModule } from '@angular/router';
import { switchMap } from 'rxjs';
import { ProductService } from '../../services/product.service';
import { CategoryListComponent } from '../../components/category-list/category-list.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule, CategoryListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})

export class ProductsComponent {
  private productService = inject(ProductService);

  // Categoria selecionada (null = todas as categorias)
  public selectedCategory = signal<string | null>(null);

  private products$ = toObservable(this.selectedCategory).pipe(
  switchMap(category => {
    return category
      ? this.productService.getProductsByCategory(category)
      : this.productService.getProducts();
  })
);

  // Criamos um signal diretamente a partir do Observable
  public products = toSignal(this.products$);

  onCategorySelected(category: string | null): void {
    this.selectedCategory.set(category);
  }
}
