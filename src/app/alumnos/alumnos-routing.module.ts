import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoAlumnoComponent } from './listado-alumno/listado-alumno.component';
import { EdicionAlumnoComponent } from './edicion-alumno/edicion-alumno.component';
import { NuevoAlumnoComponent } from './nuevo-alumno/nuevo-alumno.component';
import { AlumnoResolve } from '../guards/alumnos.resolve';

const routes: Routes = [
  { path: "", component: ListadoAlumnoComponent},
  { path: "edicion/:id", component: EdicionAlumnoComponent, resolve: { alumno:AlumnoResolve }},
  { path: "nuevo", component: NuevoAlumnoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
