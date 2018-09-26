import { Injectable } from '@angular/core';
import { ClaseNota } from '../models/clase-nota';
import{AngularFireDatabase,AngularFireList} from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ServiNotaService {

  notasList: AngularFireList<any>;
  selectedNotas:ClaseNota = new ClaseNota();
   constructor(private firebase: AngularFireDatabase) { }
  getNotas(){
        return  this.notasList= this.firebase.list('Notas');
  }

  insertNotas(nota:ClaseNota){
   this.notasList.push ({
     titulo:nota.titulo,
     texto:nota.texto,
     hora:nota.hora,
     fecha:nota.fecha
   });
  }
   UpdateNotas(nota:ClaseNota){
    this.notasList.update(nota.$key, {
      titulo:nota.titulo,
     texto:nota.texto,
     hora:nota.hora,
     fecha:nota.fecha
    });
  }
  deleteNotas($key:string)
  {
    this.notasList.remove($key);
  }
}


