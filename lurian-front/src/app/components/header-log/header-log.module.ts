import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogComponent } from './header-log.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [HeaderLogComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports:[HeaderLogComponent]
})
export class HeaderLogModule { }
