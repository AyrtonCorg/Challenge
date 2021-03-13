import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoAlquilerComponent } from './listado-alquiler.component';

const routes: Routes = [
  {
    path: '',
    component: ListadoAlquilerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListadoAlquilerRoutingModule { }
