import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {



  muestraMensaje(mensaje:string){
    alert(mensaje);
  }




  constructor() { }
}
