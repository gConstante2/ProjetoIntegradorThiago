import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio11',
  standalone: false,
  styleUrl: './exercicio11.scss',
  templateUrl: './exercicio11.html',
})
export class Exercicio11 {
nome = 'Mouse';
quantidade = 1;
valor = 100;
mensagem = '';

diminuir(){
  if(this.quantidade > 1){
    this.quantidade--;
  }
}
aumentar(){
  this.quantidade++;
}
adicionar(){
  this.mensagem = this.quantidade + ' '+ this.nome + ' adicionados'
  }
}
