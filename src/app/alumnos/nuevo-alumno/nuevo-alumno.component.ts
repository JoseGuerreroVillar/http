import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { Router } from '@angular/router';
import { IAlumno } from 'src/app/modelos/alumno.interface';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ICurso } from 'src/app/modelos/curso.interface';

@Component({
  selector: 'app-nuevo-alumno',
  templateUrl: './nuevo-alumno.component.html',
  styleUrls: ['./nuevo-alumno.component.css']
})
export class NuevoAlumnoComponent implements OnInit {

  grupo: FormGroup
  cursos: ICurso[] = []

  constructor(private alumnosService: AlumnosService, private cursosService: CursosService, private ruteador: Router) { }

  ngOnInit() {
    this.grupo = new FormGroup({
      nombreCompleto: new FormControl(null, Validators.required),
      curso: new FormControl([''])
    })
    this.listar()
  }

  listar () {
    this.cursosService.listar()
    .subscribe(
      (lista: ICurso[]) => {
        this.cursos = lista
      }
    )
  }

  insertar() {
    const alumno:IAlumno = this.grupo.getRawValue();
    this.alumnosService.insertar(alumno)
      .subscribe(
        () => this.ruteador.navigate(["/alumnos"])
      )
  }
}

