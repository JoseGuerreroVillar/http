import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NucleoRoutingModule } from './nucleo-routing.module';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [CabeceraComponent, LoginComponent],
  imports: [
    CommonModule,
    NucleoRoutingModule,
    ReactiveFormsModule
  ],
  exports: [CabeceraComponent]
})
export class NucleoModule { }
