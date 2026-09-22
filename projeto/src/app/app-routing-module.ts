import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
    path:'lista-exercicio',
    loadChildren: ()=> import('./lista-exercicio/lista-exercicio-module').then(m=>m.ListaExercicioModule)
  },
  {
    path:'lista-exercicio2',
    loadChildren: ()=> import('./lista-exercicio2/lista-exercicio2-module').then(m=>m.ListaExercicio2Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
