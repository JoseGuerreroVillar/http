import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NuevoAlumnoComponent, ListadoAlumnoComponent, EdicionAlumnoComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    ReactiveFormsModule
  ]
})
export class AlumnosModule { }
