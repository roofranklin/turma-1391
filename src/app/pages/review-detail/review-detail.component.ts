import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-review-detail',
  standalone: false,
  templateUrl: './review-detail.component.html',
  styleUrl: './review-detail.component.scss'
})
export class ReviewDetailComponent implements OnInit {
  productId: string | null = null;
  reviewId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.reviewId = this.route.snapshot.paramMap.get('reviewId');
    console.log('Product ID:', this.productId);
    console.log('Review ID:', this.reviewId);
  }

}
