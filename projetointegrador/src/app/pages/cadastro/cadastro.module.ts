import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroComponent } from './cadastro.component';
import { HeaderLogModule } from 'src/app/components/header-log/header-log.module';
import { FormSignInModule } from 'src/app/components/form-sign-in/form-sign-in.module';



@NgModule({
  declarations: [CadastroComponent],
  imports: [
    CommonModule,
    HeaderLogModule,
    FormSignInModule,

  ],exports:[CadastroComponent]
})
export class CadastroModule { }
