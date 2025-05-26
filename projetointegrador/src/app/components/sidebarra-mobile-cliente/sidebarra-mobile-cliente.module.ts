import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarraMobileClienteComponent } from './sidebarra-mobile-cliente.component';



@NgModule({
  declarations: [SidebarraMobileClienteComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports: [
    SidebarraMobileClienteModule // necessário se for usado em outro módulo
  ]
})
export class SidebarraMobileClienteModule { }
