import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Rating } from 'src/app/interfaces/iproductsResponse';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() id: number = 0;
  @Input() title: string = "";
  @Input() price: number = 0;
  @Input() description: string = "";
  @Input() category: string = "";
  @Input() image: string = "";
  @Input() rating!: Rating;

  @Output() doClick = new EventEmitter();

  constructor() { }

  click(id: Number) {

    this.doClick.emit(id);

  };





}
