import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormSeccionComponent } from './componentes/form-seccion/form-seccion.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { ListaAlumnoComponent } from './componentes/lista-alumno/lista-alumno.component';
import { RegistroHistorialComponent } from './componentes/registro-historial/registro-historial.component';
import { ListaHistorialComponent } from './componentes/lista-historial/lista-historial.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSeccionComponent,
    AlumnoComponent,
    FormAlumnoComponent,
    ListaAlumnoComponent,
    RegistroHistorialComponent,
    ListaHistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
