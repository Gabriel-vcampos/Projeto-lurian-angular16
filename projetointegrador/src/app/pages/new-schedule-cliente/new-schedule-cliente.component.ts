import { Component } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';

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
    "descricao": "Consulta médica",
    "horaMinuto": "14:30",
    "status": "AGENDADO",
  
    "clienteId": 123
  };

  constructor(private agendamentoService: AgendamentoService) {}

  salvar() {
    this.agendamentoService.cadastrarAgendamento(this.agendamento).subscribe({
      next: (res) => console.log('Agendamento enviado com sucesso:', res),
      error: (err) => console.error('Erro ao enviar agendamento:', err)
    });
  }

  cancelar() {
    console.log('Agendamento cancelado.');
  }
}
