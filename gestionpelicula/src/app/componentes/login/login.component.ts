import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { servicioPelicula } from 'src/app/servicios/servicioPelicula';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin:FormGroup;
  usuarioContrasena:boolean=false;

  constructor(private fm:FormBuilder,private servicio:servicioPelicula,private rutas:Router) {
    this.formularioLogin=this.fm.group({
      usuario:['',Validators.required],
      password:['',Validators.required]
    })
   }

  ngOnInit(): void {
    
  }

  autenticacion(){
    const usuario=this.formularioLogin.get('usuario')?.value;
    const password=this.formularioLogin.get('password')?.value;
    this.servicio.Login(usuario).subscribe(datos=>{
      if(datos.usuario_nombre==usuario && datos.usuario_password==password){
        this.usuarioContrasena=false;
        this.rutas.navigate(['principal/',datos.usuario_rol]);

      }else{
        this.usuarioContrasena=true;
        this.rutas.navigate(['login']);

      }
    },
    error=>{
      this.usuarioContrasena=true;
    }
    );
  }
}
