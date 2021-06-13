import { Component, OnInit } from '@angular/core';
import { servicioPelicula } from 'src/app/servicios/servicioPelicula';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from '../../clases/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  ListaPeliculas: Pelicula[] = [
    { pelicula_codigo: 0, pelicula_nombre: "", pelicula_descripcion: "", pelicula_horario: "", sala_id: 1, pelicula_imagen: "" }
  ];
  id: number;
  formulario: FormGroup;
  bandera: boolean = false;
  opcionSeleccionado: string = '0';
  verSeleccion: string = '';


  constructor(private fm: FormBuilder, private aRoute: ActivatedRoute, private servicio: servicioPelicula, private rutas: Router) {
    this.aRoute.snapshot.paramMap.get('id');
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    this.obtenerPeliculas();

    this.formulario = this.fm.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      horario: ['', Validators.required],
      sala: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.obtenerPeliculas();
  }

  //Obtiene listado de peliculas por el numero de sala
  obtenerPeliculas() {
    this.servicio.Peliculas(this.id).subscribe(datos => {
      this.ListaPeliculas = datos;
    })
  }

  gestion(opcion: string, id: number) {
    console.log('id ', id);
    switch (opcion) {
      case 'editar':
        this.rutas.navigate(['editarpelicula/', id]);
        //this.obtenerPelicula(id);
        this.bandera = true;
        break;
      case 'agregar':
        this.rutas.navigate(['editarpelicula/', id]);
        break;
    }
  }

  elimina(id: number) {
    Swal.fire({
      title: 'Esta seguro?',
      text: "No podrá revertir la acción!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.eliminaPelicula(id);
      }
    })
  }

  eliminaPelicula(id: number) {
    this.servicio.EliminarPelicula(id).subscribe(datos => {
      if (datos.message == "ok") {
        this.MensajeEmergente('success', 'La pelicula se eliminó exitosamente');
        this.listarPeliculas();
      }
    })
  }

  listarPeliculas() {
    this.servicio.Peliculas(this.id).subscribe(datos => {
      this.ListaPeliculas = datos;
    })
  }

  MensajeEmergente(icono: string, titulo: string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: titulo,
      showConfirmButton: false,
      timer: 1500
    })
  }

  capturar() {
    // Pasamos el valor seleccionado a la variable verSeleccion
    console.log('colo ', this.opcionSeleccionado);
    this.verSeleccion = this.opcionSeleccionado;
  }
}
