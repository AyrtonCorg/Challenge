import { Component, OnInit } from '@angular/core';
import { Reserva } from 'src/app/shared/model/reserva';
import { InmuebleService } from 'src/app/shared/service/inmueble.service';
import { ValidacionService } from 'src/app/shared/service/validacion.service';
import { Inmueble } from '../../shared/model/inmueble';

@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.component.html',
  styleUrls: ['./check-availability.component.css']
})
export class CheckAvailabilityComponent implements OnInit {
  propiedad: Inmueble;
  reserva: Reserva;
  seBusco: boolean = false;
  fechaMin: Date = new Date();
  fechaMax: Date = new Date(new Date().setFullYear(this.fechaMin.getFullYear() + 10));

  fechaDesde: Date;
  fechaHasta: Date;

  constructor(private propServ: InmuebleService,
              private validServ: ValidacionService) { 
    //Obtengo los valores desde el servicio mediante la subscripción de eventos 
    propServ.Propiedad.subscribe(prop => {
      this.propiedad = prop;
    });}

  ngOnInit() {
  }

  changeDateCheckIn(event){
    this.fechaDesde = new Date(event.value);    
    this.seBusco = false;
  }

  changeDateCheckOut(event){
    this.fechaHasta = new Date(event.value);
    this.seBusco = false;
  }

  onClick(){
    if(this.validServ.validarFecha(this.fechaDesde, this.fechaHasta)){
      this.reserva = this.propServ.calcularDisponibilidad(this.fechaDesde, this.fechaHasta);

    }else{
      this.reserva = undefined;   
      this.seBusco = true;
    }
  }

}
