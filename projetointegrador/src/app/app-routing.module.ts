import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from './pages/testes/testes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendamentoComponent } from './pages/tabela-agendamento/agendamento.component';
import { TabelaPedidosComponent } from './components/tabela-agendamento-adm/tabela-pedidos.component';
import { NewScheduleComponent } from './pages/new-schedule-adm/new-schedule.component';
import { NewScheduleClienteComponent } from './pages/new-schedule-cliente/new-schedule-cliente.component';
import { PedidosAdmComponent } from './pages/pedidos-adm/pedidos-adm.component';
import { PedidosClienteComponent } from './pages/pedidos-cliente/pedidos-cliente.component';

const routes: Routes = [
    {
        path: 'test',
        component: TestesComponent
    },
    {
        path: 'cadastro',
        title: "Seja nosso cliente",
        component: CadastroComponent
    },
    {
        path: 'login',
        title: "Seja nosso cliente",
        component: LoginComponent
    },
    {
        path: '',
        title: "Lurian",
        component: HomeComponent
    },

    {
        path: 'cliente/pedidos',
        title: 'Pedidos',
        component: PedidosClienteComponent

    },
    
    {
        path: 'adm/pedidos',
        title: 'Pedidos',
        component: PedidosAdmComponent
    },
    {
        path: 'adm/agendamentos',
        title: 'Pedidos',
        component: TabelaPedidosComponent

    },

      {
        path: 'adm/new-schedule',
        title: 'New Schedule',
        component: NewScheduleComponent
    },
    {
    path: 'cliente/new-schedule',
            title: 'cliente new-schedule',
            component: NewScheduleClienteComponent
        },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
