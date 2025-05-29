import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { SidebarraMobileComponent } from './sidebarra-mobile.component';



@NgModule({
  declarations: [SidebarraMobileComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports: [
    SidebarraMobileComponent // necessário se for usado em outro módulo
  ]
})
export class SidebarraMobileModule { }
