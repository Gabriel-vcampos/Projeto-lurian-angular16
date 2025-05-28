import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { HeaderLogModule } from 'src/app/components/header-log/header-log.module';
import { FormSignInModule } from 'src/app/components/form-sign-in/form-sign-in.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    HeaderLogModule,
    FormSignInModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CadastroModule { }
