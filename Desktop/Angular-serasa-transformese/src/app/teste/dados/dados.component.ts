import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.css']
})
export class DadosComponent {

  public nome: String = "";
  sobrenome: String = "Wisehands";

  linkSite: String = "https://www.serasa.com.br/";
  // linkDaImagem: String = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png";

  contador: number = 0;



  adicionaUm() {

    this.contador++;
  }

  menosUm() {
    this.contador--;
  }

  zerarContador() {
    this.contador = 0;
  }

  teclar(event: any){

    console.log(event.target.value);

    this.nome = event.target.value;

  }

}
