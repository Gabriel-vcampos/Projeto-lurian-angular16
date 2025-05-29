import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { NovoAgendamentoModule } from 'src/app/components/novo-agendamento/novo-agendamento.module';
import { SidebarModule } from 'src/app/components/sidebar-adm/sidebar.module';
import { SidebarraMobileModule } from 'src/app/components/sidebarra-mobile-adm/sidebarra-mobile.module';
import { PedidosAdmComponent } from './pedidos-adm.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderConfigModule,
    SidebarModule,
    ReactiveFormsModule,
    NovoAgendamentoModule,
    
    SidebarraMobileModule,
  ],
})
export class PedidosAdmModule { }
