import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendamentoComponent } from './agendamento.component';
import { SidebarModule } from 'src/app/components/sidebar-adm/sidebar.module';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { TabelaPedidosModule } from 'src/app/components/tabela-agendamento-adm/tabela-pedidos.module';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderConfigModule,
    SidebarModule,
    TabelaPedidosModule,
    AppRoutingModule,

    
  ],exports:[]
})
export class AgendamentoModule { }
