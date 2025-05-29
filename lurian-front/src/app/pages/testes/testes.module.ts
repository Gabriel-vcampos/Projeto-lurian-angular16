import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestesComponent } from './testes.component';
import { FormLoginModule } from 'src/app/components/form-login/form-login.module';
import { HeaderLogModule } from 'src/app/components/header-log/header-log.module';



@NgModule({
  declarations: [TestesComponent],
  imports: [
    CommonModule,
  FormLoginModule,
  HeaderLogModule,

  ],
  exports: [TestesComponent]
})
export class TestesModule { }
