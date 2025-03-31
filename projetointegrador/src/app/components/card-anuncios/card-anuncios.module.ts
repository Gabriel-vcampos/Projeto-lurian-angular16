import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardAnunciosComponent } from './card-anuncios.component';



@NgModule({
  declarations: [CardAnunciosComponent],
  imports: [
    CommonModule
  ],exports:[CardAnunciosComponent]
})
export class CardAnunciosModule { }
