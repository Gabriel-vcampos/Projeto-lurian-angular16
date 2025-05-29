import { Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { TestesComponent } from './pages/testes/testes.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaPedidosComponent } from './components/tabela-agendamento-adm/tabela-pedidos.component';
import { NewScheduleComponent } from './pages/new-schedule-adm/new-schedule.component';

import { PedidosAdmComponent } from './pages/pedidos-adm/pedidos-adm.component';

export const routes: Routes = [
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
        
];
