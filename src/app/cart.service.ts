import { Injectable } from '@angular/core';
import { IProduct } from './catalog/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
    cart: IProduct[] = [];

  constructor() { }

    add(product: IProduct) {
    console.log("Add to cart method called on catalong component")
    
    if(!product) return "";
    return "/assets/images/robot-parts/" + product.imageName
  }
}
