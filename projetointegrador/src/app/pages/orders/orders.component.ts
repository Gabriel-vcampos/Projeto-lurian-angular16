import { Component } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent {
  orderNumber: string = '';

  consultOrder() {
    console.log('Pedido consultado:', this.orderNumber);
  }
}
