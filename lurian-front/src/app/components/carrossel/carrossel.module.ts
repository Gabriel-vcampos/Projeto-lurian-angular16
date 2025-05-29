import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrosselComponent } from './carrossel.component';



@NgModule({
  declarations: [CarrosselComponent],
  imports: [
    CommonModule
  ],exports:[CarrosselComponent]
})
export class CarrosselModule { }
