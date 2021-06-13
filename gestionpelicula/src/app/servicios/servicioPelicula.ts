import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Injectable} from '@angular/core';
import {Pelicula} from '../clases/pelicula'
@Injectable({
    providedIn:'root'
})

export class servicioPelicula{

    myAppUrl="https://localhost:44353/";
    myApi="api/values/";

    constructor(private Http:HttpClient) { }

    //Vali los datos del usuario
    Login(usuario:string):Observable<any>{
        return this.Http.get(this.myAppUrl+this.myApi+"/Usuario/"+usuario);
    }

    //Obtiene las salas
    Salas():Observable<any>{
     return this.Http.get(this.myAppUrl+this.myApi+"Salas");
    }

    //Obtiene la peliculas a partir de la sala.
    Peliculas(id:number): Observable<any> {
        return this.Http.get(this.myAppUrl + this.myApi + "Peliculas/"+id);
    }

    PeliculasAll(): Observable<any> {
        return this.Http.get(this.myAppUrl + this.myApi + "PeliculasAll");
    }

    //Obtiene una pelicula en especifico
    Pelicula(id:number): Observable<any>{
        return this.Http.get(this.myAppUrl + this.myApi + "Pelicula/"+id);
    }

    //Guarda una nueva pelicula
    GuardaPelicula(datos:Pelicula):Observable<any>{
        return this.Http.post(this.myAppUrl + this.myApi + "GuardaPelicula",datos);
    }

    //Actualiza los datos de una pelicula
    ActualizaPelicula(datos:Pelicula):Observable<any>{
        return this.Http.put(this.myAppUrl + this.myApi + "ActualizaPelicula/"+datos.pelicula_codigo,datos);
    }

    EliminarPelicula(id:number): Observable<any>{
        return this.Http.delete(this.myAppUrl + this.myApi + "EliminaPelicula/"+id);
    }
}