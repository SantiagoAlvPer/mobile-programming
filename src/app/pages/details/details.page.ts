import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IproductsResponse } from 'src/app/interfaces/iproductsResponse';
import { HttpService } from 'src/app/services/http.service';
import { CartService } from 'src/app/services/cart.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public product: IproductsResponse | undefined;

  constructor(
    private readonly httpSrv: HttpService,
    private readonly cartSvr: CartService,
    private params: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.params.params.subscribe(async (params) => {

      const id = params['id'];
      const url = `${environment.URL_BASE}products/${id}`;

      try {
        this.product = await this.httpSrv.get<IproductsResponse>(url);
        console.log(this.product);
      } catch (error) {
        console.error('Error fetching product:', error);
      }

    });
} addToCart(event: Event): void {
      event.preventDefault(); 
      if(this.product) {
      this.cartSvr.addToCart(this.product);
      console.log('Product added to cart:', this.product);
    }
  }

  // @Output() doClick = new EventEmitter();

  // click(id: Number) {

  //   this.doClick.emit(id);

  // };

}

