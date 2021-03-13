import { Component, OnInit } from '@angular/core';
import { InmuebleService } from 'src/app/shared/service/inmueble.service';
import { Inmueble } from '../../shared/model/inmueble';

@Component({
  selector: 'app-listado-alquiler',
  templateUrl: './listado-alquiler.component.html',
  styleUrls: ['./listado-alquiler.component.css']
})
export class ListadoAlquilerComponent implements OnInit {
  alquileres : Inmueble[];

  constructor(private propServ: InmuebleService) { }

  ngOnInit() {
    this.alquileres = this.propServ.getAlquileres();
  }

}
