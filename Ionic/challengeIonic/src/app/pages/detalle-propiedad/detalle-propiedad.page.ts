import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../shared/service/propiedades.service';
import { Property } from '../../shared/model/Property';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-detalle-propiedad',
  templateUrl: './detalle-propiedad.page.html',
  styleUrls: ['./detalle-propiedad.page.scss'],
})
export class DetallePropiedadPage implements OnInit {
  property: Property;

  constructor(private propServ: PropiedadesService, private navCtr: NavController) {
    //Obtengo los valores desde el servicio mediante la subscripción de eventos 
    propServ.Propiedad.subscribe(a => {
      this.property = a;
    });
  }

  ngOnInit() {
  }

  onClick(){    
    this.navCtr.navigateForward('/check-availability', {animated:true} );
  }


}
