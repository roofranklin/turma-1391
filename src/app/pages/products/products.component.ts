import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    { id:1, name: 'Notebook Gamer', status: 'Disponível' },
    { id:2, name: 'Smartphone', status: 'Pré compra' },
    { id:3, name: 'Tablet', status: 'Indisponível' }
  ]

}
