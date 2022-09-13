import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Alumno } from 'src/app/modelos/alumno';
import { RegistroHistorial } from 'src/app/modelos/registro-historial';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-form-alumno',
  templateUrl: './form-alumno.component.html',
  styleUrls: ['./form-alumno.component.scss'],
})
export class FormAlumnoComponent {
  @Input() public sec!: Array<Seccion>;
  @Output() public mandarAlumno = new EventEmitter<Alumno>();
  @Output() public mandarRegistro = new EventEmitter<RegistroHistorial>();

  public fecha: number = Date.now();

  public secGuardada: Array<Seccion> = [];

  public tomarSec(sec: Seccion): void {
    this.secGuardada.push(sec);
  }

  public nuevaSec: Seccion = {
    id: 0,
    sigla: '',
    nomSeccion: '',
  };

  public tomarId(event: Event): void {
    const idSeccion = parseInt((event.target as HTMLInputElement).value);
    //alert(idSeccion);
    const claseAlumno = this.sec[idSeccion - 1]; //autoincremental; se accede al objeto completo
    this.nuevoAlumno.seccion = claseAlumno;
    //alert(this.nuevaSec.id + ' ' + this.nuevaSec.nomSeccion);
  }

  public nuevoAlumno: Alumno = {
    rut: 0,
    nomAlumno: '',
    apellido: '',
    edad: 0,
    seccion: this.nuevaSec,
  };

  public cambiarRut(event: Event): void {
    const rut = parseInt((event.target as HTMLInputElement).value);
    this.nuevoAlumno.rut = rut;
  }

  public cambiarNombre(event: Event): void {
    const nombre = (event.target as HTMLInputElement).value;
    this.nuevoAlumno.nomAlumno = nombre;
  }

  public cambiarApellido(event: Event): void {
    const apellido = (event.target as HTMLInputElement).value;
    this.nuevoAlumno.apellido = apellido;
  }

  public cambiarEdad(event: Event): void {
    const edad = parseInt((event.target as HTMLInputElement).value);
    this.nuevoAlumno.edad = edad;
  }

  public regAlumno(): void {
    const copia: Alumno = {
      ...this.nuevoAlumno, //Cuando registro, siempre guardo una copia
    };
    console.log(copia);
    //alert(copia.seccion.nomSeccion);
    this.mandarAlumno.emit(copia);


    const nuevoReg: RegistroHistorial = {
      fecha: this.fecha,
      alumno: copia
    }

    const copiaReg: RegistroHistorial = {
      ...nuevoReg
    }

    this.mandarRegistro.emit(copiaReg);



    this.nuevoAlumno.rut = 0;
    this.nuevoAlumno.nomAlumno = '';
    this.nuevoAlumno.apellido = '';
    this.nuevoAlumno.edad = 0

  }
}
