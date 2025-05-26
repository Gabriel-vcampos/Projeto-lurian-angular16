import { Component } from '@angular/core';

@Component({
  selector: 'app-new-schedule-cliente',
  templateUrl: './new-schedule-cliente.component.html',
  styleUrls: ['./new-schedule-cliente.component.scss']
})
export class NewScheduleClienteComponent {
  agendamento = {
    nomeCompleto: '',
    email: '',
    endereco: '',
    numero: '',
    cep: '',
    contato: '',
    descricaoPedido: '',
    profissional: '',
    data: '',
    horario: '',
    numeroPedido: '#12541897',
  };

  salvar() {
    console.log('Agendamento enviado:', this.agendamento);
  }

  cancelar() {
    console.log('Agendamento cancelado.');
  }
}
