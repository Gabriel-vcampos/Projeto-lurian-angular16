import { Component } from '@angular/core';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss']
})
export class NewScheduleComponent {

  agendamento = {
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
