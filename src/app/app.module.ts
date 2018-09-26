import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule}from '@angular/forms';
import { AppComponent } from './app.component';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule}from 'angularfire2';
import{environment} from '../environments/environment';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { NotasListaComponent } from './components/Proyecto/notas-lista/notas-lista.component';
import { NotaComponent } from './components/Proyecto/nota/nota.component';
import{ ServiNotaService  } from './services/servi-nota.service';
import{BrowserAnimationsModule}from'@angular/platform-browser/animations';
import{ ToastrModule} from'ngx-toastr';



import { AppRoutingModule,rutas } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    rutas
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    ServiNotaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
