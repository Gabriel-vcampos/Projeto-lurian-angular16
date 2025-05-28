import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { NovoAgendamentoModule } from 'src/app/components/novo-agendamento/novo-agendamento.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { NewScheduleClienteComponent } from './new-schedule-cliente.component';
import { SidebarClienteModule } from '../../components/sidebar-cliente/sidebar-cliente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeaderConfigModule,
    ReactiveFormsModule,
    NovoAgendamentoModule,
    AppRoutingModule,
    RouterModule,
    SidebarClienteModule,
  ],
})
export class NewScheduleClienteModule { }
