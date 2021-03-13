import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../shared/service/propiedades.service';
import { Property } from '../../shared/model/Property';

@Component({
  selector: 'app-listado-alquiler',
  templateUrl: './listado-alquiler.page.html',
  styleUrls: ['./listado-alquiler.page.scss'],
})
export class ListadoAlquilerPage implements OnInit {
  public alquileres : Property[];

  constructor(private propServ: PropiedadesService) { }

  ngOnInit() {
    this.alquileres = this.propServ.getAlquileres();
  }

}
