import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento.component';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { TabelaPedidosModule } from 'src/app/components/tabela-pedidos/tabela-pedidos.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderConfigModule,
    SidebarModule,
    
    TabelaPedidosModule

    
  ],exports:[]
})
export class AgendamentoModule { }
