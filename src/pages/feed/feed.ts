import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objetoFeed  = {

    titulo : "Giovanni Carmo",
    data : "08/10/2017",
    descricao : "Reinaldo e Bruno, dois VIADÃO discutindo se java é melhor que php. Após a discussão, aquele tradicional suquinho de laranja...",
    qntLikes : 12,
    qntComments : 4,
    timeComment : "08h ago"
  }

  public nomeUsuario:string = "Giovanni S. do Carmo";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumeros (num1 : number, num2 : number) : void{

    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
  }

}
