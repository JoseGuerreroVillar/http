import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoCursoComponent } from './listado-curso/listado-curso.component';
import { EdicionCursoComponent } from './edicion-curso/edicion-curso.component';
import { NuevoCursoComponent } from './nuevo-curso/nuevo-curso.component';
import { CursoResolve } from '../guards/cursos.resolve';  

const routes: Routes = [
  { path: "", component: ListadoCursoComponent},
  { path: "edicion/:id", component: EdicionCursoComponent, resolve: {curso: CursoResolve}},
  { path: "nuevo", component: NuevoCursoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
