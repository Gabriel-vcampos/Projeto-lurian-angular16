import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BotaoAgendaComponent } from './botao-agenda.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [BotaoAgendaComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports:[BotaoAgendaComponent]
})
export class BotaoAgendamodule{}
