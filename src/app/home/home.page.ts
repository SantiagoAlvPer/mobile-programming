import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpService } from '../services/http.service';
import { environment } from 'src/environments/environment.prod';
import { IproductsResponse } from '../interfaces/iproductsResponse';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public products : IproductsResponse[]=[]
  constructor(private readonly httpSrv: HttpService, private readonly navCtr: NavController) {}

  async ngOnInit() {
    const url = environment.URL_BASE + "products"
   this.products = await this.httpSrv.get<IproductsResponse[]>(url);
   console.log(this.products)
  }

  public doNavigate(id: number){
    this.navCtr.navigateForward("details/" + id)
    console.log(id)
  
  }
  viewCart() {
    this.navCtr.navigateForward('/cart');
  }
}
