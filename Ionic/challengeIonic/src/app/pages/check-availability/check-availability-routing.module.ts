import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckAvailabilityPage } from './check-availability.page';

const routes: Routes = [
  {
    path: '',
    component: CheckAvailabilityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckAvailabilityPageRoutingModule {}
