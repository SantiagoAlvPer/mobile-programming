import { Injectable } from '@angular/core';
import { IproductsResponse } from '../interfaces/iproductsResponse';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: IproductsResponse[] = [];


  constructor() { }
  addToCart(product: IproductsResponse){
    this.cart.push(product);
  }
  getitems(){
    return this.cart;
  }
  getCartItems(): IproductsResponse[] {
    return this.cart; 
  }
  
}
