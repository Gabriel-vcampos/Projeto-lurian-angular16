import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderLogComponent } from './header-log.component';



@NgModule({
  declarations: [HeaderLogComponent],
  imports: [
    CommonModule
  ],exports:[HeaderLogComponent]
})
export class HeaderLogModule { }
