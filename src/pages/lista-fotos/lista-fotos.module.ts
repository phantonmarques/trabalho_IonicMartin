import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaFotosPage } from './lista-fotos';

@NgModule({
  declarations: [
    ListaFotosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaFotosPage),
  ],
})
export class ListaFotosPageModule {}
