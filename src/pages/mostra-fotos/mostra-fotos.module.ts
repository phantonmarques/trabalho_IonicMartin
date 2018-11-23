import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MostraFotosPage } from './mostra-fotos';

@NgModule({
  declarations: [
    MostraFotosPage,
  ],
  imports: [
    IonicPageModule.forChild(MostraFotosPage),
  ],
})
export class MostraFotosPageModule {}
