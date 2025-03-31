import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { HeaderLogModule } from 'src/app/components/header-log/header-log.module';
import { HeaderLogComponent } from 'src/app/components/header-log/header-log.component';
import { FormLoginModule } from 'src/app/components/form-login/form-login.module';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    HeaderLogModule,
    FormLoginModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
