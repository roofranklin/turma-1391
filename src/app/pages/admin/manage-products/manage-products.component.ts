import { Component, signal, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../interfaces/product.interface';

@Component({
  selector: 'app-manage-products',
  standalone: false,
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent implements OnInit {
  private productService = inject(ProductService);
  public route = inject(ActivatedRoute);
  private router = inject(Router);
  private fb = inject(FormBuilder);

  public products = signal<Product[]>([]);
  public status = signal<'idle' | 'loading' | 'success' | 'error'>('idle');
  public errorMessage = signal<string | null>(null);
  public productForm: FormGroup;
  public isEditMode = false;
  private productId: number | null = null;

  constructor() {
    this.productForm = this.fb.group({
      title: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.loadProducts();
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.isEditMode = true;
        this.productId = +id;
        this.loadProductForEdit(+id);
      }
    });
  }

  loadProducts() {
    this.productService.getProducts().subscribe({
      next: (products) => this.products.set(products),
      error: (err) => this.handleError(err)
    });
  }

  loadProductForEdit(id: number) {
    this.status.set('loading');
    this.productService.getProductById(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.status.set('idle');
      },
      error: (err) => this.handleError(err)
    });
  }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }
    this.status.set('loading');
    this.errorMessage.set(null);

    if (this.isEditMode && this.productId) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (product) => {
        this.status.set('success');
        this.products.update(products => [...products, product]);
        this.productForm.reset();
      },
      error: (err) => this.handleError(err)
    });
  }

  updateProduct() {
    if (!this.productId) return;

    this.productService.updateProduct(this.productId, this.productForm.value).subscribe({
      next: () => {
        this.status.set('success');
        setTimeout(() => this.router.navigate(['/admin/manage-products']), 1500);
      },
      error: (err) => this.handleError(err)
    });
  }

  onDeleteProduct(productId: number) {
    this.productService.deleteProduct(productId).subscribe({
      next: () => {
        this.products.update(products => products.filter(p => p.id !== productId));
      },
      error: (err) => this.handleError(err)
    });
  }

  private handleError(err: any) {
    this.status.set('error');
    this.errorMessage.set(err.message || 'Ocorreu um erro desconhecido.');
  }
}
