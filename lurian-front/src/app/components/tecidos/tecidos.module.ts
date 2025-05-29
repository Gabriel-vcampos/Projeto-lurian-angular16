import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TecidosComponent } from './tecidos.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [TecidosComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],
  exports:[TecidosComponent]
})
export class TecidosModule { }
