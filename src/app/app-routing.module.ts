import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NotaComponent } from './components/Proyecto/nota/nota.component';
import { NotasListaComponent } from './components/Proyecto/notas-lista/notas-lista.component';

 const route:Routes=[
  {path:'home',component:ProyectoComponent},
  {path:'nota',component:NotaComponent},
  {path:'nota-lista',component:NotasListaComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
]
@NgModule({
  imports: [
    RouterModule.forRoot(route)
    
  ],
  exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
export const rutas=[ProyectoComponent,NotaComponent,NotasListaComponent]


