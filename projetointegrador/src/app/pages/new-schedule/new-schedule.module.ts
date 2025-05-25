import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewScheduleComponent } from './new-schedule.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderConfigModule } from 'src/app/components/header-config/header-config.module';
import { SidebarModule } from 'src/app/components/sidebar/sidebar.module';
import { NovoAgendamentoModule } from 'src/app/components/novo-agendamento/novo-agendamento.module';



@NgModule({
  declarations: [NewScheduleComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeaderConfigModule,
    SidebarModule,
    ReactiveFormsModule,
    NovoAgendamentoModule
  ],
  exports:[NewScheduleComponent]
})
export class NewScheduleModule { }
