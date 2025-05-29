import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderHomeComponent } from './header-home.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [HeaderHomeComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ],exports:[HeaderHomeComponent]
})
export class HeaderHomeModule { }
