import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderConfigComponent } from './header-config.component';



@NgModule({
  declarations: [HeaderConfigComponent],
  imports: [
    CommonModule
  ],exports:[HeaderConfigComponent]
})
export class HeaderConfigModule { }
