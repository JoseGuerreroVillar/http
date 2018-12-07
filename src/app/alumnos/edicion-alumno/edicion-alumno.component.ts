import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IAlumno } from 'src/app/modelos/alumno.interface';
import { AlumnosService } from 'src/app/servicios/alumnos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from 'src/app/servicios/cursos.service';
import { ICurso } from 'src/app/modelos/curso.interface';

@Component({
  selector: 'app-edicion-alumno',
  templateUrl: './edicion-alumno.component.html',
  styleUrls: ['./edicion-alumno.component.css']
})
export class EdicionAlumnoComponent implements OnInit {

  grupo: FormGroup;
  alumno: IAlumno;
  cursos: ICurso[] = [];

  constructor(private alumnosService: AlumnosService, private cursosService: CursosService, private ruteador: Router, private rutaActiva: ActivatedRoute) { }

  ngOnInit() {
    this.alumno = this.rutaActiva.snapshot.data.alumno;
    this.grupo = new FormGroup ({
      idAlumno: new FormControl(this.alumno.idAlumno),
      nombreCompleto: new FormControl(this.alumno.nombreCompleto, Validators.required),
      curso: new FormControl([''])
    })
    this.listar();
  }

  listar () {
    this.cursosService.listar()
    .subscribe(
      (lista: ICurso[]) => {
        this.cursos = lista
      }
    )
  }

  actualizar() {
    const alumno:IAlumno = this.grupo.getRawValue();
    this.alumnosService.actualizar(alumno)
      .subscribe(
        () => this.ruteador.navigate(["/alumnos"])
      )
  }

}
