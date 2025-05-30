// new-schedule-cliente.component.ts
import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { NewScheduleModule } from './new-schedule.module';

@Component({
  selector: 'app-new-schedule',
  templateUrl: './new-schedule.component.html',
  styleUrls: ['./new-schedule.component.scss'],
})
export class NewScheduleComponent implements OnInit {
  userData: any = [];

  agendamento = {
    nomeCompleto: '',
    email: '',
    endereco: '',
    numero: '',
    cep: '',
    contato: '',
    descricao: '',
    profissional: '',
    data: '',
    horaMinuto: '',
    numeroPedido: '',
      status: 'ENVIADO',
    clienteId: 0
  };

  constructor(private agendamentoService: AgendamentoService) {}

    private gerarNumeroPedido(): string {
    const min = 10000000;
    const max = 99999999;
    const rnd = Math.floor(Math.random() * (max - min + 1)) + min;
    return `#${rnd}`;
  }
  ngOnInit(): void {
    const raw = sessionStorage.getItem('userData');
    this.userData = raw ? JSON.parse(raw) : null;
    this.agendamento.numeroPedido = this.gerarNumeroPedido();

    if (this.userData) {
      // Preenche automaticamente os campos do agendamento
      this.agendamento.nomeCompleto = this.userData.nome;
      this.agendamento.email        = this.userData.email;
      this.agendamento.clienteId    = this.userData.id;
    }
  }

  showSuccessPopup = false;

salvar(): void {
  this.agendamentoService.cadastrarAgendamento(this.agendamento).subscribe({
    next: res => {
      this.showSuccessPopup = true;

      // Esconde o popup após 3 segundos
      setTimeout(() => {
        this.showSuccessPopup = false;
      }, 3000);
    },
    error: err => console.error('Erro ao enviar agendamento:', err)
  });
}

  cancelar(): void {
    console.log('Agendamento cancelado.');
  }
}
