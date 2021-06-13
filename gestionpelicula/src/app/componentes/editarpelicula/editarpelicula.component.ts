import { Component, OnInit } from '@angular/core';
import { servicioPelicula } from 'src/app/servicios/servicioPelicula';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pelicula } from 'src/app/clases/pelicula';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editarpelicula',
  templateUrl: './editarpelicula.component.html',
  styleUrls: ['./editarpelicula.component.css']
})
export class EditarpeliculaComponent implements OnInit {

  ListaPeliculas: Pelicula[] = [
    { pelicula_codigo: 0, pelicula_nombre: "", pelicula_descripcion: "", pelicula_horario: "", sala_id: 1,pelicula_imagen:"" }
  ];
  
  formulario: FormGroup;
  id: number;
  bandera: boolean=false;
  url:any="";

  constructor(private fm: FormBuilder, private aRoute: ActivatedRoute, private servicio: servicioPelicula, private rutas: Router) { 

    this.aRoute.snapshot.paramMap.get('id');
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;

    this.formulario = this.fm.group({
      codigo: ['', Validators.required],
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      horario: ['', Validators.required],
      sala:['',Validators.required],
      imagen:['',Validators.required]
    })
    this.IniciaBandera(this.id);
  }

  IniciaBandera(ban:number){
    if(ban!=-1){//Pasa si si va a editar
      this.bandera=true;
      this.obtenerPelicula();
    }else{     //Pasa si si va agregar nueva pelicula
      this.bandera=false
    }
  }

  ngOnInit(): void {
  }

  obtenerPelicula() {
    this.servicio.Pelicula(this.id).subscribe(datos => {
      this.formulario.patchValue({
        codigo: datos.pelicula_codigo,
        nombre: datos.pelicula_nombre,
        descripcion: datos.pelicula_descripcion,
        horario: datos.pelicula_horario,
        sala:datos.sala_id,
        imagen:datos.pelicula_imagen
      })
      // this.sala=datos.sala_id;
    })
  }

  guardar() {

    const datoss: Pelicula = {
      pelicula_codigo: parseInt(this.formulario.get('codigo')?.value),
      pelicula_nombre: this.formulario.get('nombre')?.value,
      pelicula_descripcion: this.formulario.get('descripcion')?.value,
      pelicula_horario: this.formulario.get('horario')?.value,
      sala_id: parseInt(this.formulario.get('sala')?.value),
      pelicula_imagen:this.formulario.get('imagen')?.value,
    }
    if (this.bandera) {//Va a actualizar los valores
      this.servicio.ActualizaPelicula(datoss).subscribe(datos=>{
        console.log('okk ',datos);
        if(datos.message=="ok"){
          this.formulario.reset();
          this.MensajeEmergente('success','La pelicula se actualizó exitosamente');
          this.rutas.navigate(['pelicula/',datoss.sala_id]);
        }
      },
      error=>{
        this.MensajeEror();
      })
    } else {          //va a guardar una nueva pelicula
      this.servicio.GuardaPelicula(datoss).subscribe(datos => {
        if(datos.message=="ok"){
          this.formulario.reset();
          this.MensajeEmergente('success','La creó exitosamente');
          this.rutas.navigate(['pelicula/',datoss.sala_id]);
        }
      },
      error=>{
        this.MensajeEror();
      })
    }
  }

  listarPeliculas(){
    this.servicio.Peliculas(this.id).subscribe(datos => {
      this.ListaPeliculas = datos;
    })
  }

  MensajeEmergente(icono:string,titulo:string) {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: titulo,
      showConfirmButton: false,
      timer: 1500
    })
  }

  MensajeEror() {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Se presento un error!'
    })
  }

  
  gestion(opcion: string, id: number) {
    switch (opcion) {
      case 'editar':
        this.rutas.navigate(['editarpelicula/',id]);
        //this.obtenerPelicula(id);
        this.bandera = true;
        break;
      case 'limpiar':
        this.formulario.reset();
        this.bandera = false;
        break;
    }
  }

  readUrl(event:any) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
  
      reader.onload = (event: ProgressEvent) => {
        this.url = (<FileReader>event.target).result;
        console.log('imagen ',this.url);
      }

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
