import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BgManequimComponent } from './bg-manequim.component';
import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [BgManequimComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
  ],exports:[BgManequimComponent]
})

export class BgManequimmodule{}