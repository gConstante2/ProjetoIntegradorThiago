import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicio3',
  standalone: false,
  styleUrl: './exercicio3.scss',
  templateUrl: './exercicio3.html',
})
export class Exercicio3 {
  idade = 1;
  menos(){
    this.idade--;
  }
  mais(){
    this.idade++;
  }
}
