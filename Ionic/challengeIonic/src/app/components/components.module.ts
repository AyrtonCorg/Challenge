import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PropiedadListadoComponent } from './propiedad-listado/propiedad-listado.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PropiedadListadoComponent
  ],
  exports: [
    HeaderComponent,
    PropiedadListadoComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    
  ]
})
export class ComponentsModule { }
