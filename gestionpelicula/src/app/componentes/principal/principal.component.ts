import { Component, OnInit } from '@angular/core';
import { servicioPelicula } from 'src/app/servicios/servicioPelicula';
import { ActivatedRoute } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  usuario_rol:string="";

  imagenes:string []=[""];

  ListaSalas:any []=[
    {sala_id:1},
    {sala_nombre:""},
    {sala_descripcion:""}
  ];

  ListaPeliculas:Pelicula []=[
    {pelicula_codigo:1,pelicula_nombre:"",pelicula_descripcion:"",pelicula_horario:"",sala_id:0,pelicula_imagen:""}
  ];

  constructor(private servicio:servicioPelicula,private aRoute: ActivatedRoute) { 
    this.aRoute.snapshot.paramMap.get('id');
    this.usuario_rol = this.aRoute.snapshot.paramMap.get('rol')!;
    

    this.servicio.Salas().subscribe(datos=>{
      this.ListaSalas=datos;
    })

    this.listarPeliculas(this.usuario_rol);


  }

  listarPeliculas(usuario_rol:string){
    if(usuario_rol=="invitado"){
      this.servicio.PeliculasAll().subscribe(datos=>{
        this.ListaPeliculas=datos;

        for(let i=0; i<datos.length; i++){
          this.imagenes.push(datos[i].pelicula_imagen);
          console.log('sa ',datos[i].pelicula_imagen);
        }
      })
    }
  }

  ngOnInit(): void {
  }
}
