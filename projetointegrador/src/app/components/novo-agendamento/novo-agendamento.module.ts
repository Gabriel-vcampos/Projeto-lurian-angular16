import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { NovoAgendamentoComponent } from './novo-agendamento.component';



@NgModule({
  declarations: [NovoAgendamentoComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class NovoAgendamentoModule { }
