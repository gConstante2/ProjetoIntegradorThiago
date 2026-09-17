import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio9',
  standalone: false,
  styleUrl: './exercicio9.scss',
  templateUrl: './exercicio9.html',
})
export class Exercicio9 {
nome = 'Mouse';
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
