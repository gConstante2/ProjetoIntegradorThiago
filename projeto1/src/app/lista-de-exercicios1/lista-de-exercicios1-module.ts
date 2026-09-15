import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaDeExercicios1RoutingModule } from './lista-de-exercicios1-routing-module';
import { Exercicio1 } from './exercicio1/exercicio1';
import { FormsModule } from '@angular/forms';
import { Exercicio2 } from './exercicio2/exercicio2';

@NgModule({
  declarations: [Exercicio1, Exercicio2],
  imports: [CommonModule, ListaDeExercicios1RoutingModule, FormsModule],
})
export class ListaDeExercicios1Module {}
