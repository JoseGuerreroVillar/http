import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IAlumno } from '../modelos/alumno.interface';
import { AlumnosService } from '../servicios/alumnos.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoResolve implements Resolve<IAlumno> {

  constructor(private alumnosService: AlumnosService) { }

  resolve(rutaActiva: ActivatedRouteSnapshot):
  IAlumno | Observable<IAlumno> | Promise<IAlumno> {
    return this.alumnosService.detallar(+rutaActiva.paramMap.get("id"));
  }
}
