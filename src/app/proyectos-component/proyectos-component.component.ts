import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleados.model';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-proyectos-component',
  templateUrl: './proyectos-component.component.html',
  styleUrls: ['./proyectos-component.component.css']
})

export class ProyectosComponentComponent implements OnInit {
  empleados:Empleado[]=[];

  title = 'Listado de Empleados';

  constructor( private router:Router , private  miServicio : ServicioEmpleadosService , private miServicioEmpleado:EmpleadoService){ }


  ngOnInit(): void {
    this.empleados=this.miServicioEmpleado.empleados
  }
 
  volverHome(){
    //Metodo navigate() le pasamos el array con la ruta donde queremos ir eje navigate([""]) esta ruta me lleva al home
    this.router.navigate(['']);
  }

  agregarEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.miServicioEmpleado.agregarEmpleadoServicio(miEmpleado)
    this.router.navigate(['']);

  }
  cuadroNombre:string=""
  cuadroApellido:string=""
  cuadroCargo:string=""
  cuadroSalario:number=0

  



}


