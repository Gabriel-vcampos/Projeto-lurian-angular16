import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [FormSignInComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ], exports:[FormSignInComponent]
})
export class FormSignInModule { }
