import { Component, Output, EventEmitter } from '@angular/core';
import { Seccion } from 'src/app/modelos/seccion';

@Component({
  selector: 'app-form-seccion',
  templateUrl: './form-seccion.component.html',
  styleUrls: ['./form-seccion.component.scss']
})
export class FormSeccionComponent{

  @Output() public mandarSeccion = new EventEmitter<Seccion>();

  public nuevaSeccion: Seccion = {
    id: 0,
    sigla: '',
    nomSeccion: ''
  }

  public cambiarNomSeccion(event: Event): void {
    const nombre = (event.target as HTMLInputElement).value;
    this.nuevaSeccion.nomSeccion = nombre;
  }

  public cambiarSiglaSeccion(event: Event): void {
    const sigla = (event.target as HTMLInputElement).value;
    this.nuevaSeccion.sigla = sigla;
  }

  public registrarSeccion(): void {
    const copia: Seccion = {
      ...this.nuevaSeccion
    }
    //alert(copia.id + ' ' +copia.nomSeccion)
    this.mandarSeccion.emit(copia);
    this.nuevaSeccion.nomSeccion = '';
    //alert("Sección registrada correctamente")
  }


}
