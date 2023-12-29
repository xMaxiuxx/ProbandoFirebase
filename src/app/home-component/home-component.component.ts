import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit{

  title = 'Listado de Empleados';



 constructor(private miServicio : ServicioEmpleadosService , private miServicioEmpleado:EmpleadoService){

  // this.empleados=this.miServicioEmpleado.empleados  

 }

 ngOnInit(): void {
   this.empleados=this.miServicioEmpleado.empleados

  this.miServicioEmpleado.obtenerEmpleados().subscribe(misEmpleados=>{
      console.log(misEmpleados)

      //Los valores del objeto misEmpleados Ahora seran almacenados en el array empleados 
      this.empleados= Object.values(misEmpleados)

      this.miServicioEmpleado.setEmpleados(this.empleados)
    });
 }

 empleados:Empleado[]=[];



  agregarEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.miServicioEmpleado.agregarEmpleadoServicio(miEmpleado)
  }
  cuadroNombre:string=""
  cuadroApellido:string=""
  cuadroCargo:string=""
  cuadroSalario:number=0










}
