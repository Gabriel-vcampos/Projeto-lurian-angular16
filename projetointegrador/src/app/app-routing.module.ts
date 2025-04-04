import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestesComponent } from './pages/testes/testes.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AgendamentoComponent } from './pages/agendamento/agendamento.component';
import { TabelaPedidosComponent } from './components/tabela-pedidos/tabela-pedidos.component';

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
        path: 'pedidos',
        title: 'Pedidos',
        component: TabelaPedidosComponent

    }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
