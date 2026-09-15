import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio6',
  standalone: false,
  styleUrl: './exercicio6.scss',
  templateUrl: './exercicio6.html',
})
export class Exercicio6 {
quantidade = 0;
menos: boolean = false;

diminuir(){
  if(this.quantidade > 0){
    this.quantidade--;
  }
}
aumentar(){
  this.quantidade++;
}
}




