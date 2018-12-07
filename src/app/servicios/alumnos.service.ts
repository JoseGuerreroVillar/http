import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAlumno } from '../modelos/alumno.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http: HttpClient) { }

  listar(): Observable<IAlumno[]> {
    return this.http.get<IAlumno[]>(`${environment.apiRest}/alumnos`)
  }

  detallar(idAlumno: number):Observable<IAlumno> {
    return this.http.get<IAlumno>(`${environment.apiRest}/alumnos/${idAlumno}`)
  }

  insertar(alumno: IAlumno): Observable<IAlumno>  {
    return this.http.post<IAlumno>(`${environment.apiRest}/alumnos`, alumno)
  }

  actualizar(alumno: IAlumno): Observable<IAlumno> {
    return this.http.put<IAlumno>(`${environment.apiRest}/alumnos/${alumno.idAlumno}`, alumno)
  }

  eliminar(idAlumno: number): Observable<IAlumno> {
    return this.http.delete<IAlumno>(`${environment.apiRest}/alumnos/${idAlumno}`)
  }
}
