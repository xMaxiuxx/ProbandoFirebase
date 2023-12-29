import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmpleadoHijoCComponent } from './empleado-hijo-c/empleado-hijo-c.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadoService } from './empleado.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosComponentComponent } from './proyectos-component/proyectos-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactoComponentComponent } from './contacto-component/contacto-component.component';
import {RouterModule, Routes } from '@angular/router';
import { ActualizaComponentComponent } from './actualiza-component/actualiza-component.component';
import { PaginaErrorComponent } from './pagina-error/pagina-error.component';
import { DataServices } from './data.services';
import { LoginComponent } from './login/login.component';

  const appRoutes: Routes=[
    {path:'', component:HomeComponentComponent},
    {path:'proyectos', component:ProyectosComponentComponent},
    {path:'about', component:AboutComponentComponent},
    {path:'contacto', component:ContactoComponentComponent},
    {path:'update/:id', component:ActualizaComponentComponent},
    {path:'login', component:LoginComponent},
    {path:'**',component:PaginaErrorComponent}




  ]

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoCComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    AboutComponentComponent,
    ContactoComponentComponent,
    HomeComponentComponent,
    ProyectosComponentComponent,
    AboutComponentComponent,
    ContactoComponentComponent,
    ActualizaComponentComponent,
    PaginaErrorComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [
    ServicioEmpleadosService,
    EmpleadoService,
    DataServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
