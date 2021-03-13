import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoAlquilerPage } from './listado-alquiler.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoAlquilerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoAlquilerPageRoutingModule {}
