import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaRetornoJsonPage } from './lista-retorno-json';

@NgModule({
  declarations: [
    ListaRetornoJsonPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaRetornoJsonPage),
  ],
})
export class ListaRetornoJsonPageModule {}
