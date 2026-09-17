import { Component } from '@angular/core';

@Component({
  selector: 'app-desafio',
  standalone: false,
  styleUrl: './desafio.scss',
  templateUrl: './desafio.html',
})
export class Desafio {
  nome ='';
  disciplinas = 1;
  mensagem = '';

  mais(){
    this.disciplinas++;
  }
  menos(){
    if(this.disciplinas>1){
      this.disciplinas--;
    }
  }

  matricular(){
    this.mensagem = "Aluno " + this.nome + " matriculado em " + this.disciplinas + " disciplina(s)"
  }
}
