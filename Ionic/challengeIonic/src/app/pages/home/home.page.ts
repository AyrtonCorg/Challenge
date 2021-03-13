import { Component } from '@angular/core';
import { OpcionMenu } from '../../shared/interfaces/OpcionMenu';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  opciones: OpcionMenu[] = [
    {
      icon: 'list-outline',
      name: 'Ver alquileres',
      redirectTo: '/listado-alquiler'
    }
  ]

  constructor() {}


}
