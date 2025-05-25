import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderLogModule } from "../../components/header-log/header-log.module";
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormLoginModule } from 'src/app/components/form-login/form-login.module';



@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HeaderLogModule,
    AppRoutingModule,
    FormLoginModule
],
  exports:[
    OrdersComponent

  ]
})
export class OrdersModule { }
