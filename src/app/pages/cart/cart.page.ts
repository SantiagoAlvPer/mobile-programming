import { Component, OnInit } from '@angular/core';
import { IproductsResponse } from 'src/app/interfaces/iproductsResponse';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  public cartItems: IproductsResponse[] = []; 

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.loadCartItems();
  }

  private loadCartItems() {
    this.cartItems = this.cartService.getCartItems(); 
  }
}
