import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabelaAgendamentoClienteComponent } from './tabela-agendamento-cliente.component';



@NgModule({
  declarations: [TabelaAgendamentoClienteComponent],
  imports: [
    CommonModule
  ],exports: [TabelaAgendamentoClienteComponent]
})
export class TabelaAgendamentoClienteModule { }
