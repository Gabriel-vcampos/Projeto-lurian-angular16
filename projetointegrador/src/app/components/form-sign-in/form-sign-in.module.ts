import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [FormSignInComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ], exports:[FormSignInComponent]
})
export class FormSignInModule { }
