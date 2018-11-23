import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpRequestProvider } from '../../providers/http-request/http-request';

/**
 * Generated class for the ListaFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lista-fotos',
  templateUrl: 'lista-fotos.html',
})
export class ListaFotosPage {
  listaFotos=[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider) {
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ListaFotosPage');
    this.httpRequest.getFotosLista().subscribe(
      data => {
        // tratando retorno JSON
        var obj = (data as any);
        console.log("obj: ");
        console.log(obj);
        var objJSON = JSON.parse(obj._body);
        for (let c=0;c < objJSON.length;c++){
          var guardarLista = objJSON[c];
          guardarLista.guardarFoto = "https://picsum.photos/200/300?image=" + guardarLista.id;
          this.listaFotos.push(guardarLista);
        }
        console.log(guardarLista.guardarFoto);
      },
      error => {
        console.log("ERRO: " + error);
      })
  }

}
