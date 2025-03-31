import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPedidosComponent } from './tabela-pedidos.component';



@NgModule({
  declarations: [TabelaPedidosComponent],
  imports: [
    CommonModule
  ],exports:[TabelaPedidosComponent]
})
export class TabelaPedidosModule { }
