import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from './pages/testes/testes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { TabelaPedidosComponent } from './components/tabela-pedidos/tabela-pedidos.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { OrderDetailsComponent } from './pages/order-details/order-details.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NewScheduleComponent } from './pages/new-schedule-adm/new-schedule.component';

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
        path: 'adm/pedidos',
        title: 'Pedidos',
        component: AgendamentoComponent
    },

    {
      path: 'orders',
      title: 'Orders',
      component: OrdersComponent
  },
    {
        path: 'pedidos',
        title: 'Pedidos',
        component: TabelaPedidosComponent

    },

          {
            path: 'order-details',
            title: 'Order details',
            component: OrderDetailsComponent
        },
        {
          path: 'reset-password',
          title: 'reset password',
          component: ResetPasswordComponent
      },

      {
        path: 'adm/new-schedule',
        title: 'New Schedule',
        component: NewScheduleComponent
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
