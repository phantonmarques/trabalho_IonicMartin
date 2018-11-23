import { HttpRequestProvider } from './../../providers/http-request/http-request';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the MostraFotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mostra-fotos',
  templateUrl: 'mostra-fotos.html',
})
export class MostraFotosPage {

  public UrlImgRandom: String;
  anterior : Array<String>;
  contador : number;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public httpRequest: HttpRequestProvider,
    public alertCtrl: AlertController) { 
      this.anterior = new Array<string>();
      this.contador = 0;

     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostraFotosPage');
    this.proximaFoto();
  }

  proximaFoto(){
    this.httpRequest.getFotoRandomica().subscribe(
      data => {
        //Aplicando o retorno
        console.log(data.toString);
        console.log(data.url);
        this.UrlImgRandom = data.url;
        this.anterior.push(data.url);
        this.contador = this.anterior.indexOf(data.url);        
      },
      error =>{
        console.log("ERRO: "+ error);
      })
  }

  imagemAnterior(){
    if (this.contador > 0){
      this.contador = this.contador -1;
      this.UrlImgRandom = this.anterior[this.contador]; 
      console.log(this.UrlImgRandom);
      console.log(this.contador);
    } else { 
      this.showAlert();
      console.log("Deu ruim!")
    } 
  }

  showAlert() {
    const alert = this.alertCtrl.create({
      title: 'Não existem mais imagens anteriores!',
      buttons: ['OK']
    });
    alert.present();
  }

}
