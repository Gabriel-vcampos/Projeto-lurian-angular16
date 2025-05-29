import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.scss']
})
export class PedidosAdmComponent implements OnInit {
  pedidos: any;

  
  constructor(private agendamentoService: AgendamentoService ){}
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
  numeroPedido: '',
  statusPedido: ''
};

ngOnInit(): void {
      this.agendamentoService.getAllAgendamentos().subscribe({

    
      next: res =>  this.pedidos = res,
      error: err => console.error('Erro ao enviar agendamento:', err)

    });

  }

  salvar() {
    console.log('Agendamento enviado:', this.agendamento);
  }

  cancelar() {
    console.log('Agendamento cancelado.');
  }
 cancelarPedido() {
  const pedidoIndex = this.pedidos.findIndex((p: any) => p.id.toString() === this.agendamento.numeroPedido);

  if (pedidoIndex !== -1) {
    this.pedidos[pedidoIndex].status = 'CANCELADO';
    this.agendamento.statusPedido = 'CANCELADO';
    console.log('Pedido cancelado:', this.pedidos[pedidoIndex]);
  } else {
    console.warn('Pedido não encontrado para cancelamento.');
  }
}
pesquisarPedido() {
  const pedido = this.pedidos.find((p: any) => p.id.toString() === this.agendamento.numeroPedido);

  if (pedido) {
    this.agendamento.descricaoPedido = pedido.descricao;
    this.agendamento.horario = pedido.horaminuto;
    this.agendamento.statusPedido = pedido.status;
    console.log('Pedido encontrado:', pedido);
  } else {
    console.warn('Pedido não encontrado.');
  }
}


}
