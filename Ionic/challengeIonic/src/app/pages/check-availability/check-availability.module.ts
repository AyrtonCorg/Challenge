import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckAvailabilityPageRoutingModule } from './check-availability-routing.module';

import { CheckAvailabilityPage } from './check-availability.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CheckAvailabilityPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CheckAvailabilityPage]
})
export class CheckAvailabilityPageModule {}
