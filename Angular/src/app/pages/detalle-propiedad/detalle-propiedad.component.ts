import { Component, OnInit } from '@angular/core';
import { Inmueble } from '../../shared/model/inmueble';
import { Router } from '@angular/router';
import { InmuebleService } from 'src/app/shared/service/inmueble.service';

@Component({
  selector: 'app-detalle-propiedad',
  templateUrl: './detalle-propiedad.component.html',
  styleUrls: ['./detalle-propiedad.component.css']
})
export class DetallePropiedadComponent implements OnInit {
  property: Inmueble;

  constructor(private propServ: InmuebleService, private router: Router) {
    //Obtengo los valores desde el servicio mediante la subscripción de eventos 
    propServ.Propiedad.subscribe(a => {
      this.property = a;
    });
  }

  ngOnInit() {
  }

  onClick(){    
    this.router.navigate(['/check-availability']);
  }
}
