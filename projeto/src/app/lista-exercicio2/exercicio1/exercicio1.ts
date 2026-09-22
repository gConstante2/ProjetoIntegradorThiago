import { Component } from '@angular/core';

@Component({
  selector: 'testando',
  standalone: false,
  styleUrl: './exercicio1.scss',
  templateUrl: './exercicio1.html',
})
export class Exercicio1 {
  mostrar : boolean = true;
  
  alterar(){
    this.mostrar = !this.mostrar;
  }
}
