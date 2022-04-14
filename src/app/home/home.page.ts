import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

form: any = 
{
 preco:'',
 distancia:'',
 consumo:''
};

mensagem : string  = "";

  constructor() {}


  btnCalculo_Click() : void {

    var litros : number = Number(this.form.distancia) / Number(this.form.consumo);
    var valor: Number = litros * Number(this.form.preco);
     this.mensagem = "R$" + valor ;
  } 

}
