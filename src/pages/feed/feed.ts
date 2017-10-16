import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

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
  providers:[
    MovieProvider
  ]
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


  public listaFilmes = new Array<any>();

  public nomeUsuario:string = "Giovanni S. do Carmo";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider: MovieProvider
  ){
  }

  public somaDoisNumeros (num1 : number, num2 : number) : void{

    alert(num1 + num2);
  }

  ionViewDidLoad() {
    //this.somaDoisNumeros(10, 99);
    this.movieProvider.getLatestMovies().subscribe(
      
      data=>{

        const response = (data as any);
        const objetoRetorno = JSON.parse(response._body);
        this.listaFilmes = objetoRetorno.results;
        
        console.log(objetoRetorno);

      }, error=>{
        console.log(error);
      }
    
    )
  }

}
