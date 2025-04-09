import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent {


  orderNumber: string = '3371824';

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['/consultar']);
  }

}
