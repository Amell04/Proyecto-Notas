import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { snapshotChanges } from 'angularfire2/database';
import { ClaseNota } from '../../../models/clase-nota';
import { ServiNotaService } from '../../../services/servi-nota.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-notas-lista',
  templateUrl: './notas-lista.component.html',
  styleUrls: ['./notas-lista.component.css']
})
export class NotasListaComponent implements OnInit {

  notaslist: ClaseNota[];
  selectedNotas: any;
 

  constructor(private notaServicios : ServiNotaService,
             private toastr : ToastrService
             )  { }

  ngOnInit() 
  {
    this.notaServicios.getNotas()
    .snapshotChanges()
    .subscribe(item =>{
      this.notaslist = [];
      item.forEach(element=> {
       let x = element.payload.toJSON();
       x["$key"] = element.key;
       this.notaslist.push(x as ClaseNota);
       });
    });
  }
  onEdit(nota : ClaseNota){
    this.notaServicios.selectedNotas= Object.assign({},nota);    
  
    
  }
  onDelete($key:string){
    if(confirm('Esta Seguro de Eliminar Este Regstro?')){
      this.notaServicios.deleteNotas($key);
     this.toastr.warning('Operacion Completada','Nota Eliminada');
    }

   
  }
}
