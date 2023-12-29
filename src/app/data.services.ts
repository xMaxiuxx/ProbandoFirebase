import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Empleado } from "./empleados.model";

@Injectable()

export class DataServices{

    constructor(private httpClient:HttpClient){

    }

    cargarEmpleados(){
        return this.httpClient.get('https://conociendofirebasebbd-default-rtdb.firebaseio.com/datos.json');
    }







    guardarEmpleados(empleados:Empleado[]){
        this.httpClient.put('https://conociendofirebasebbd-default-rtdb.firebaseio.com/datos.json',empleados).subscribe(
            response => console.log("se han guardado los empleados" + response),
            error => console.log("Error:" + error ),
        );

    }

    actualizarEmpleado(indice:number, empleado:Empleado){
        let url = 'https://conociendofirebasebbd-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url,empleado).subscribe(
            response => console.log("se han modificado correctamente el empleado" + response),
            error => console.log("Error:" + error ),
        );

    }




    elimnarEmpleado(indice:number){
        let url = 'https://conociendofirebasebbd-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log("se ha eliminado correctamente el empleado" + response),
            error => console.log("Error:" + error ),
        );

    }

} 