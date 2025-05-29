import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { NovoAgendamentoModule } from 'src/app/components/novo-agendamento/novo-agendamento.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { NewScheduleComponent } from './new-schedule.component';
import { SidebarModule } from 'src/app/components/sidebar-adm/sidebar.module';
import { SidebarraMobileModule } from 'src/app/components/sidebarra-mobile-adm/sidebarra-mobile.module';



@NgModule({
  declarations: [NewScheduleComponent],
  imports: [
        CommonModule,
        FormsModule,
        HeaderConfigModule,
        ReactiveFormsModule,
        NovoAgendamentoModule,
        AppRoutingModule,
        SidebarModule,
        RouterModule,
        SidebarraMobileModule
  ],
  exports:[NewScheduleComponent]
})
export class NewScheduleModule { }
