import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'lista-de-exercicio1',
    loadChildren: ()=> import('./lista-de-exercicios1/lista-de-exercicios1-module').then(m=>m.ListaDeExercicios1Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
