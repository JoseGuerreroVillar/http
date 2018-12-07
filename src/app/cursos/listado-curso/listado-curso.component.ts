import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ICurso } from 'src/app/modelos/curso.interface';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { IAlumno } from 'src/app/modelos/alumno.interface';

@Component({
  selector: 'app-listado-curso',
  templateUrl: './listado-curso.component.html',
  styleUrls: ['./listado-curso.component.css']
})
export class ListadoCursoComponent implements OnInit {

  cursos: ICurso[] = [];
  alumnos: IAlumno = {};

  constructor(private cursosService: CursosService, private alumnosService: AlumnosService, private ruteador:Router) { }

  ngOnInit() {
    this.listar();
  }

  listar () {
    this.cursosService.listar()
    .subscribe(
      (lista: ICurso[]) => {
        console.table(lista)
        this.cursos = lista
      }
    )
  }

  eliminar(idCurso: number) {
    if(confirm("Esta seguro de eliminar?"))
      this.cursosService.eliminar(idCurso)
        .subscribe(
          () => {
            this.listar()
          }
        )
  }

  editar(idCurso: number) {
    this.ruteador.navigate(["/cursos","edicion",idCurso])
  }

  verAlumnos(idCurso: number) {
    this.alumnosService.detallar(idCurso)
      .subscribe(
        (lista: IAlumno) => {
          this.alumnos = lista
          console.log(this.alumnos)
        }
      )
  }
}
