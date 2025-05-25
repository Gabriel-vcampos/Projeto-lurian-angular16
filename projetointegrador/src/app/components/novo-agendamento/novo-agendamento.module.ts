import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NovoAgendamentoComponent } from './novo-agendamento.component';



@NgModule({
  declarations: [NovoAgendamentoComponent],
  imports: [
    CommonModule,
  ],
  exports:[NovoAgendamentoComponent]
})
export class NovoAgendamentoModule { }
