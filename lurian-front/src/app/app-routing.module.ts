import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from './pages/testes/testes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { TabelaPedidosComponent } from './components/tabela-agendamento-adm/tabela-pedidos.component';
import { NewScheduleComponent } from './pages/new-schedule-adm/new-schedule.component';
import { PedidosAdmComponent } from './pages/pedidos-adm/pedidos-adm.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
    {
        path: 'test',
        component: TestesComponent
    },
    {
    path: 'adm/new-schedule',
    component: NewScheduleComponent,
    canActivate: [AuthGuard] // <-- aqui está a proteção
  },
  {
  path: 'adm/pedidos',
    component: PedidosAdmComponent,
    canActivate: [AuthGuard] // <-- aqui está a proteção
  },
    {
        path: 'cadastro',
        title: "Seja nosso cliente",
        component: CadastroComponent,
        canActivate: [AuthGuard]
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
    {
    path: 'cliente/new-schedule',
            title: 'cliente new-schedule',
            component: NewScheduleComponent
        },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
