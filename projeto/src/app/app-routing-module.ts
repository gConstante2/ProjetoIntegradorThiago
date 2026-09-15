import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path:'lista-exercicio',
    loadChildren: ()=> import('./lista-exercicio/lista-exercicio-module').then(m=>m.ListaExercicioModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
