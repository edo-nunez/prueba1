import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno';
import { RegistroHistorial } from './modelos/registro-historial';
import { Seccion } from './modelos/seccion';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final';

public seccionRegistrada: Array<Seccion> = [];
public alumnoRegistrado: Array<Alumno> = [];
public registroGuardado: Array<RegistroHistorial> = [];

public tomarSeccion (seccion:Seccion):void {
  const id: number = this.seccionRegistrada.length + 1;
  seccion.id = id;
  this.seccionRegistrada.push(seccion);
 // alert(seccion.nomSeccion)
}

public tomarAlumno(alumno: Alumno): void {
  this.alumnoRegistrado.push(alumno);
}

public tomarRegistro (registro: RegistroHistorial): void {
  this.registroGuardado.push(registro);
}

}
