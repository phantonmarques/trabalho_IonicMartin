import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaObjetosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-objetos',
  templateUrl: 'lista-objetos.html',
})
export class ListaObjetosPage {
  public contatos : Array<object>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contatos = [
      {
        nome: "Daniel",
        img: "https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png",
        mensagem: "Olá Daniel, bem vindo!"
      },
      {
        nome: "Alex",
        img: "https://cdn.iconscout.com/icon/free/png-256/avatar-375-456327.png",
        mensagem: "Olá Alex, bem vindo!"
      },
      {
        nome: "Thais",
        img: "https://cdn.iconscout.com/icon/free/png-256/avatar-369-456321.png",
        mensagem: "Olá Thais, bem vindo!"
      }];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaObjetosPage');
  }

}
