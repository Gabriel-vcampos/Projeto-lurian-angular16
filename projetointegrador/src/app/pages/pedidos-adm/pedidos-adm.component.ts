import { Component } from '@angular/core';

@Component({
  selector: 'app-pedidos-adm',
  templateUrl: './pedidos-adm.component.html',
  styleUrls: ['./pedidos-adm.component.scss']
})
export class PedidosAdmComponent {

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



  salvar() {
    console.log('Agendamento enviado:', this.agendamento);
  }

  cancelar() {
    console.log('Agendamento cancelado.');
  }
  cancelarPedido() {
  // Lógica de cancelamento aqui
  console.log('Pedido cancelado');
}
pesquisarPedido(){
  console.log('Pedido pesquisado!');
}

}
