import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetallePropiedadPageRoutingModule } from './detalle-propiedad-routing.module';
import { DetallePropiedadPage } from './detalle-propiedad.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetallePropiedadPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [DetallePropiedadPage]
})
export class DetallePropiedadPageModule {}
