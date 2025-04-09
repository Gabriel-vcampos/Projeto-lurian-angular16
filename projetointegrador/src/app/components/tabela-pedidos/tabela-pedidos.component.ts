import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-pedidos',
  templateUrl: './tabela-pedidos.component.html',
  styleUrls:[ './tabela-pedidos.component.scss']
})
export class TabelaPedidosComponent {

  pedidos = [
    {
      hora: '12:30',
      nome: 'João Silva',
      numeroPedido: '#12345',
      profissional: 'Carlos Mendes',
      endereco: 'Rua A, 123',
      status: 'Concluído',
      contato: '(11) 98765-4321',
    },
    {
      hora: '14:00',
      nome: 'Maria Souza',
      numeroPedido: '#12346',
      profissional: 'Ana Pereira',
      endereco: 'Rua B, 456',
      status: 'Em andamento',
      contato: '(11) 99876-5432',
    },
    {
      hora: '15:15',
      nome: 'Carlos Alberto',
      numeroPedido: '#12347',
      profissional: 'Fernanda Lima',
      endereco: 'Rua C, 789',
      status: 'Cancelado',
      contato: '(11) 91234-5678',
    },
    {
      hora: '16:45',
      nome: 'Ana Oliveira',
      numeroPedido: '#12348',
      profissional: 'Ricardo Santos',
      endereco: 'Rua D, 101',
      status: 'Pendente',
      contato: '(11) 93456-7890',
    },
  ];
}
