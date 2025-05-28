import { BreakpointObserver } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tabela-agendamento-cliente',
  templateUrl: './tabela-agendamento-cliente.component.html',
  styleUrls: ['./tabela-agendamento-cliente.component.scss']
})
export class TabelaAgendamentoClienteComponent {
  showMobileSidebar = false;
  selectedPedidos: any[] = [];

  pedidos = [
    {
      hora: '08:00–08:30',
      nome: 'Theresa Webb',
      numeroPedido: '112110',
      descricao: 'Vestido para Casamento',
      profissional: 'Alex',
      endereco: '4140 Parker Rd. Allentown, New Mexico 31134',
      status: 'Concluído',
      contato: 'email'
    },
    {
      hora: '09:30–09:45',
      nome: 'Jerome Bell',
      numeroPedido: '258128',
      descricao: 'Terno',
      profissional: 'Ana Lopes',
      endereco: '2841 Parker Rd. Allentown, NM',
      status: 'Aguardando',
      contato: 'telefone'
    }
  ];

  constructor(private breakpointObserver: BreakpointObserver) {}

  getStatusClasses(status: string) {
    switch(status.toLowerCase()) {
      case 'agendado': return 'bg-blue-100 text-blue-800';
      case 'aguardando': return 'bg-yellow-100 text-yellow-800';
      case 'não confirmado': return 'bg-red-100 text-red-800';
      case 'concluído': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  }

  
}

