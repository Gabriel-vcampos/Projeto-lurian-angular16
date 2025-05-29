import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderHomeModule } from 'src/app/components/header-home/header-home.module';
import { BotaoAgendamodule } from 'src/app/components/botao-agenda/botao-agenda.module';
import { CarrosselModule } from 'src/app/components/carrossel/carrossel.module';
import { TecidosModule } from 'src/app/components/tecidos/tecidos.module';
import { FooterModule } from 'src/app/components/footer/footer.module';
import { BgManequimmodule } from 'src/app/components/bg-manequim/bg-manequim.module';
import { CardAnunciosModule } from 'src/app/components/card-anuncios/card-anuncios.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HeaderHomeModule,
    BotaoAgendamodule,
    CarrosselModule,
    FooterModule,
    TecidosModule,
    BgManequimmodule,
    CardAnunciosModule,

  ],
  exports:[HomeComponent]
})
export class HomeModule { }
