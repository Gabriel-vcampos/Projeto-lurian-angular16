import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "src/app/app-routing.module";
import { HeaderConfigModule } from "src/app/components/header-config/header-config.module";
import { SidebarModule } from "src/app/components/sidebar-adm/sidebar.module";
import { TabelaPedidosModule } from "src/app/components/tabela-agendamento-adm/tabela-pedidos.module";
import { TabelaAgendamentoClienteModule } from "src/app/components/tabela-agendamento-cliente/tabela-agendamento-cliente.module";
import { PedidosClienteComponent } from "./pedidos-cliente.component";

@NgModule({
  declarations: [
    PedidosClienteComponent
  ],
  imports: [
    CommonModule,
    SidebarModule,
    HeaderConfigModule,
    TabelaPedidosModule,
    AppRoutingModule,
    TabelaAgendamentoClienteModule // ← Componente já está disponível aqui
  ]
})
export class PedidosClienteModule {}