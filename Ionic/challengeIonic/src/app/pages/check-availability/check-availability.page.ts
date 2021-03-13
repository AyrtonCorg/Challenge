import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../shared/service/propiedades.service';
import { Property } from '../../shared/model/Property';
import { ValidacionService } from '../../shared/service/validacion.service';
import { Reserva } from '../../shared/model/Reserva';
import { ToastController } from '@ionic/angular';
import { async } from 'rxjs';

@Component({
  selector: 'app-check-availability',
  templateUrl: './check-availability.page.html',
  styleUrls: ['./check-availability.page.scss'],
})
export class CheckAvailabilityPage implements OnInit {
  propiedad: Property;
  reserva: Reserva;
  
  fechaMin: string = new Date().toISOString();
  fechaMax: string;

  fechaDesde: Date;
  fechaHasta: Date;

  constructor(private propServ: PropiedadesService,
              private validServ: ValidacionService,
              private toastController: ToastController) { 
    //Obtengo los valores desde el servicio mediante la subscripción de eventos 
    propServ.Propiedad.subscribe(prop => {
      this.propiedad = prop;
    });}

  ngOnInit() {
    this.fechaMax = new Date(new Date().setFullYear(new Date().getFullYear() + 10)).toISOString();
  }

  changeDateCheckIn(event){
    this.fechaDesde = new Date(event.detail.value);
  }

  changeDateCheckOut(event){
    this.fechaHasta = new Date(event.detail.value);
  }

  onClick(){
    if(this.validServ.validarFecha(this.fechaDesde, this.fechaHasta)){
      this.reserva = this.propServ.calcularDisponibilidad(this.fechaDesde, this.fechaHasta);

    }else{
      this.reserva = undefined;
      this.presentToast();      
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'La propiedad no está disponible para ese rango de fecha.',
      duration: 2000
    });
    toast.present();
  }
}
