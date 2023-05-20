import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductImageSliderComponent } from '../../shared/components/image/product-image-slider/product-image-slider.component';

@Component({
  selector: 'jgh-shop-product-detail',
  standalone: true,
  imports: [CommonModule, ProductImageSliderComponent],
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {}
