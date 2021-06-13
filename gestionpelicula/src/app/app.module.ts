import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PeliculaComponent } from './componentes/pelicula/pelicula.component';
import { SalaComponent } from './componentes/sala/sala.component';
import {PrincipalComponent} from './componentes/principal/principal.component';
import { EditarpeliculaComponent } from './componentes/editarpelicula/editarpelicula.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PeliculaComponent,
    SalaComponent,
    PrincipalComponent,
    EditarpeliculaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
