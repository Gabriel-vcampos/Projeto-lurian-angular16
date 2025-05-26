import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarClienteComponent } from './sidebar-cliente.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [SidebarClienteComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],exports:[SidebarClienteComponent]
})
export class SidebarClienteModule { }
