import { Component, Input, OnInit } from '@angular/core';
import { Property } from '../../shared/model/Property';
import { NavController } from '@ionic/angular';
import { PropiedadesService } from '../../shared/service/propiedades.service';

@Component({
  selector: 'propiedades',
  templateUrl: './propiedad-listado.component.html',
  styleUrls: ['./propiedad-listado.component.scss'],
})
export class PropiedadListadoComponent implements OnInit {
  @Input()propiedad : Property;
  
  constructor(private navCtr: NavController, private propServ:PropiedadesService) { }

  ngOnInit() {
  }

  onClick(propiedad){
    this.propServ.setPropiedad(propiedad);
    this.navCtr.navigateForward('/detalle-propiedad', {animated:true} );
  }  
}
