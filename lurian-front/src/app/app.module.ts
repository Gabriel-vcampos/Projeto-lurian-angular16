import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { TestesComponent } from './pages/testes/testes.component';
import { SidebarModule } from "./components/sidebar-adm/sidebar.module";
import { HeaderConfigModule } from "./components/header-config/header-config.module";
import { TabelaPedidosModule } from "./components/tabela-agendamento-adm/tabela-pedidos.module";
import { HeaderLogModule } from "./components/header-log/header-log.module";
import { FormSignInModule } from "./components/form-sign-in/form-sign-in.module";
import { HeaderHomeModule } from "./components/header-home/header-home.module";
import { BotaoAgendamodule } from "./components/botao-agenda/botao-agenda.module";
import { CarrosselModule } from "./components/carrossel/carrossel.module";
import { TecidosModule } from "./components/tecidos/tecidos.module";
import { CardAnunciosModule } from "./components/card-anuncios/card-anuncios.module";
import { BgManequimmodule } from "./components/bg-manequim/bg-manequim.module";
import { FooterModule } from "./components/footer/footer.module";
import { FormLoginModule } from "./components/form-login/form-login.module";
import { RouterModule } from '@angular/router';
import { NewScheduleModule } from './pages/new-schedule-adm/new-schedule.module';
import { NovoAgendamentoModule } from './components/novo-agendamento/novo-agendamento.module';
import { SidebarraMobileModule } from './components/sidebarra-mobile-adm/sidebarra-mobile.module';
import { FormsModule } from '@angular/forms';
import { PedidosAdmComponent } from './pages/pedidos-adm/pedidos-adm.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CadastroComponent,
    TestesComponent,
    PedidosAdmComponent,





  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    HeaderConfigModule,
    TabelaPedidosModule,
    HeaderLogModule,
    FormSignInModule,
    HeaderHomeModule,
    BotaoAgendamodule,
    CarrosselModule,
    FormLoginModule,
    TabelaPedidosModule,
    HeaderConfigModule,
    SidebarModule,
    FooterModule,
    BgManequimmodule,
    BotaoAgendamodule,
    HeaderHomeModule,
    CardAnunciosModule,
    HttpClientModule,
    BgManequimmodule,
    FooterModule,
    FormLoginModule,
    TecidosModule,
    NovoAgendamentoModule,
    NewScheduleModule,
    SidebarraMobileModule,
    RouterModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


/*
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,  // Ensure components are listed here
    HeaderConfigComponent,
    // ... other components
  ],
  imports: [
    BrowserModule,
    // ... other modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
*/
