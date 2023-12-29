import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-empleado-hijo-c',
  templateUrl: './empleado-hijo-c.component.html',
  styleUrls: ['./empleado-hijo-c.component.css']
})
export class EmpleadoHijoCComponent {
  @Input()  empleadoDeLista:Empleado
  @Input()  indice:number

  arrayCaracteristicas = [''];

  agregarCaracteristicaalArray(nuevaCaracteristica: string) {
    this.arrayCaracteristicas.push(nuevaCaracteristica);
  }




}
