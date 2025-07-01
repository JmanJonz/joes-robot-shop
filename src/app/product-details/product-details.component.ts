import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../catalog/product.model';

@Component({
  selector: 'botz-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: IProduct;
  @Output() buy = new EventEmitter()

  getImageUrl(product: IProduct) {
    return '/assets/images/robot-parts/' + product.imageName
  }

  getDiscountedClasses(product: IProduct) {
    // return {strikethrough: product.discount > 0}
    // if (product.discount > 0) {  // can return a string
    //   return 'strikethrough';
    // }
    // return ""
    if (product.discount > 0) {   // can also return array of class name strings
      return ['strikethrough'];
    }
    return []
  }

  buyButtonClicked(product: IProduct) {
    this.buy.emit();
  }
}
