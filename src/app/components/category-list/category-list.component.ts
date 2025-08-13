import { Component, inject, EventEmitter, Output } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {

  private categoryService = inject(CategoryService);
  public categories = toSignal(this.categoryService.getCategories());

  @Output() categorySelected = new EventEmitter<string | null>();

  select(category: string | null): void {
    this.categorySelected.emit(category);
  }

}
