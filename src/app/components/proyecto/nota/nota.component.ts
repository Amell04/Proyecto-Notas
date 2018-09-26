import { Component, OnInit } from '@angular/core';
import { ClaseNota } from '../../../models/clase-nota';
import{NgForm}from '@angular/forms';
import{ServiNotaService}from'../../../services/servi-nota.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-nota',
  templateUrl: './nota.component.html',
  styleUrls: ['./nota.component.css']
})
export class NotaComponent implements OnInit {

  constructor(private notaServicio:ServiNotaService,
               private toastr : ToastrService) { }

  ngOnInit() 
  {

    this.notaServicio.getNotas();
    this.resetForm();
  }

  onSubmit(NotasForm : NgForm) 
  {
    if(NotasForm.value.$key==null) 
    this.notaServicio.insertNotas(NotasForm.value);
    
    else
    this.notaServicio.UpdateNotas(NotasForm.value);
    this.resetForm(NotasForm);
    this.toastr.success('Operacion Completada','Nota Agregada')
   
  }
   resetForm(NotasForm?: NgForm)
   {
     if(NotasForm ! = null)
     NotasForm.reset();
     this.notaServicio.selectedNotas=new ClaseNota();
   }
}
