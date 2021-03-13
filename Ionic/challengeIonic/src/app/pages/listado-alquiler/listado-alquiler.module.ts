import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoAlquilerPageRoutingModule } from './listado-alquiler-routing.module';

import { ListadoAlquilerPage } from './listado-alquiler.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoAlquilerPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ListadoAlquilerPage]
})
export class ListadoAlquilerPageModule {}
