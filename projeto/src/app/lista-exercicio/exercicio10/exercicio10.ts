import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio10',
  standalone: false,
  styleUrl: './exercicio10.scss',
  templateUrl: './exercicio10.html',
})
export class Exercicio10 {
  usuario ='';
  senha='';
  mensagem = '';

  entrar(){
    this.mensagem = "Bem vindo " + this.usuario;
  }
}
