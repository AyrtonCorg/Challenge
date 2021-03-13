import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckAvailabilityComponent } from './check-availability.component';

const routes: Routes = [
  {
    path: '',
    component: CheckAvailabilityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckAvailabilityRoutingModule { }
