import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ListaRetornoJsonPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-retorno-json',
  templateUrl: 'lista-retorno-json.html',
})
export class ListaRetornoJsonPage {

  listaJSON = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaRetornoJsonPage');
    this.httpRequest.getFakeLista().subscribe(
      data => {
        // tratando retorno JSON
        var obj = (data as any);
        console.log("obj: ");
        console.log(obj);
        var objJSON = JSON.parse(obj._body);
        for (let c = 0; c < objJSON.length;c++){
          var guardaObjeto = objJSON[c];
          this.listaJSON.push(guardaObjeto);
        }
        
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

}
