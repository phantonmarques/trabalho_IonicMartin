import { ListaObjetosPage } from './../lista-objetos/lista-objetos';
import { MostraFotosPage } from './../mostra-fotos/mostra-fotos';
import { ListaRetornoJsonPage } from './../lista-retorno-json/lista-retorno-json';
import { ListaFotosPage } from './../lista-fotos/lista-fotos';
import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  paginaListaObjetos(){
    this.navCtrl.push('ListaObjetosPage');
  }

  paginaMostraFotos(){
    this.navCtrl.push('MostraFotosPage');
  }

  paginaListaRetornoJSON(){
    this.navCtrl.push('ListaRetornoJsonPage');
  }

  paginaListaFotos(){
    this.navCtrl.push('ListaFotosPage');
  }

  mostraAlerta(){
    const alert = this.alertCtrl.create({
      title: 'Novo Amigo',
      subTitle: 'Amigo aceitou seu convite de amizade!',
      buttons: ['OK']
    });
    alert.present();
  }
}
