import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaPedidosComponent } from './tabela-pedidos.component';
import { SidebarraMobileModule } from '../sidebarra-mobile-adm/sidebarra-mobile.module';
import { SidebarModule } from '../sidebar-adm/sidebar.module';
import { HeaderConfigModule } from '../header-config/header-config.module';



@NgModule({
  declarations: [TabelaPedidosComponent],
  imports: [
    CommonModule,
    SidebarraMobileModule,
    SidebarModule,
    HeaderConfigModule,
    SidebarraMobileModule
  ],exports:[TabelaPedidosComponent]
})
export class TabelaPedidosModule { }
