import { Component, OnInit } from '@angular/core';
import { IAlumno } from 'src/app/modelos/alumno.interface';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-listado-alumno',
  templateUrl: './listado-alumno.component.html',
  styleUrls: ['./listado-alumno.component.css']
})
export class ListadoAlumnoComponent implements OnInit {

  alumnos: IAlumno[] = [];

  constructor(private alumnosService: AlumnosService, private ruteador: Router) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.alumnosService.listar()
    .subscribe(
      (lista: IAlumno[]) => {
        this.alumnos = lista
      }
    )
  }

  editar(idAlumno: number) {
    this.ruteador.navigate(["/alumnos","edicion",idAlumno]);
  }

  eliminar(idAlumno: number) {
    if(confirm("Esta seguro de eliminar?")) {
      this.alumnosService.eliminar(idAlumno)
        .subscribe(
          () => {
            this.listar()
          }
        )
    }
  }
}
