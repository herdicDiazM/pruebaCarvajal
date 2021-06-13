import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent} from './componentes/principal/principal.component';
import { PeliculaComponent} from './componentes/pelicula/pelicula.component'
import { EditarpeliculaComponent} from './componentes/editarpelicula/editarpelicula.component'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'principal/:rol',component:PrincipalComponent},
  {path:'pelicula/:id',component:PeliculaComponent},
  {path:'editarpelicula/:id',component:EditarpeliculaComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
