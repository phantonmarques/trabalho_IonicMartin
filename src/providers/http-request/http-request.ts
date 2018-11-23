import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HttpRequestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpRequestProvider {

  constructor(public http: Http) {
    console.log('Hello HttpRequestProvider Provider');
  }

  public getFotoRandomica(){
    return this.http.get("https://picsum.photos/200/300/?random");
  }

  public getFotosLista(){
    return this.http.get("https://picsum.photos/list");
  }

  public getFakeLista(){
    return this.http.get("https://jsonplaceholder.typicode.com/posts");
  }
}
