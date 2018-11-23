import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaObjetosPage } from './lista-objetos';

@NgModule({
  declarations: [
    ListaObjetosPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaObjetosPage),
  ],
})
export class ListaObjetosPageModule {}
