import { Component, Input } from '@angular/core';
import { RegistroHistorial } from 'src/app/modelos/registro-historial';

@Component({
  selector: 'app-registro-historial',
  templateUrl: './registro-historial.component.html',
  styleUrls: ['./registro-historial.component.scss']
})
export class RegistroHistorialComponent {

  @Input() public registro!: RegistroHistorial;

}
