import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicioEmpleadosService } from '../servicio-empleados.service';
import { EmpleadoService } from '../empleado.service';
import { Empleado } from '../empleados.model';

@Component({
  selector: 'app-actualiza-component',
  templateUrl: './actualiza-component.component.html',
  styleUrls: ['./actualiza-component.component.css']
})
export class ActualizaComponentComponent implements OnInit {

  empleados:Empleado[]=[];

  title = 'Listado de Empleados';


  constructor( private route:ActivatedRoute, private router:Router , private  miServicio : ServicioEmpleadosService , private miServicioEmpleado:EmpleadoService){ }


  ngOnInit(): void {
    this.empleados=this.miServicioEmpleado.empleados
    this.indice = this.route.snapshot.params['id']; // Rescatamos el id que viene de la url 
    let empleado:Empleado= this.miServicioEmpleado.encontrarEmpleado(this.indice)  //construye un objeto de tipo empleado y llama el metodo encontrarEmpleado pasandole el indice 
    this.cuadroNombre=empleado.nombre;
    this.cuadroApellido=empleado.apellido;
    this.cuadroCargo=empleado.cargo;
    this.cuadroSalario=empleado.salario
  }
 
  volverHome(){
    //Metodo navigate() le pasamos el array con la ruta donde queremos ir eje navigate([""]) esta ruta me lleva al home
    this.router.navigate(['']);
  }

  actualizaEmpleado(){
    let miEmpleado = new Empleado (this.cuadroNombre,this.cuadroApellido,this.cuadroCargo,this.cuadroSalario)
    // this.miServicio.muestraMensaje("Nombre del empleado:" + miEmpleado.nombre);
    this.miServicioEmpleado.actualizarEmpleado(miEmpleado, this.indice)
    this.router.navigate(['']);

  }

  eliminarEmpleado(){
    this.miServicioEmpleado.eliminarEmpleado(this.indice)
    this.router.navigate(['']);
    }




  cuadroNombre:string=""
  cuadroApellido:string=""
  cuadroCargo:string=""
  cuadroSalario:number=0
  indice:number;

  
}
