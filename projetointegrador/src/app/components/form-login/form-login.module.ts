import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [FormLoginComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],exports:[FormLoginComponent]
})
export class FormLoginModule { }
