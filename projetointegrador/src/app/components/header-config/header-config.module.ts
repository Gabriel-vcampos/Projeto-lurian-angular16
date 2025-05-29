import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderConfigComponent } from './header-config.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderConfigComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],exports:[HeaderConfigComponent]
})
export class HeaderConfigModule { }
