import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { EdicionCursoComponent } from './edicion-curso/edicion-curso.component';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [EdicionCursoComponent, ListadoCursoComponent, NuevoCursoComponent],
  imports: [
    CommonModule,
    CursosRoutingModule,
    ReactiveFormsModule
  ]
})
export class CursosModule { }
