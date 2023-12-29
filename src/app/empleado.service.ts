import { Injectable } from '@angular/core';
import { Empleado } from './empleados.model';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { DataServices } from './data.services';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService  {

constructor(private servicioVentanaEmergente: ServicioEmpleadosService, private dataServices:DataServices){


}

  
  // empleados:Empleado[]=[
    
  //     new Empleado("Maxi","Gatica","Consultor",5000),
  //     new Empleado("Pedro","Sifuentes","Consultor avanzado",8000),
  //     new Empleado("Mauro","Perez","director",15000),
  //     new Empleado("Mario","Rodriguez","administrativo",2000)
  
    
  // ]


  obtenerEmpleados(){
    return this.dataServices.cargarEmpleados();
  }

  empleados:Empleado[]=[];



  agregarEmpleadoServicio(empleado:Empleado){
    this.servicioVentanaEmergente.muestraMensaje("Persona Que se va a agregar:" + "\n" + 
    empleado.nombre + "\n" + "Salario:" + empleado.salario )

    this.empleados.push(empleado);

    this.dataServices.guardarEmpleados(this.empleados)

    
  }

  encontrarEmpleado(indice:number){
    let empleado:Empleado=this.empleados[indice];
    return empleado;
  }

  actualizarEmpleado(empleado:Empleado, indice:number){
    let empleadoModificado=this.empleados[indice];

    empleadoModificado.nombre= empleado.nombre;
    empleadoModificado.salario= empleado.salario
    empleadoModificado.cargo= empleado.cargo
    empleadoModificado.apellido= empleado.apellido

    this.dataServices.actualizarEmpleado(indice, empleado)

  }

  eliminarEmpleado(indice:number){
    this.empleados.splice(indice,1)
    this.dataServices.elimnarEmpleado(indice);
    this.dataServices.guardarEmpleados(this.empleados)
    if(this.empleados!=null) this.dataServices.guardarEmpleados(this.empleados)
  }

  setEmpleados(misEmpleados:Empleado[]){
    this.empleados=misEmpleados
  }


}
