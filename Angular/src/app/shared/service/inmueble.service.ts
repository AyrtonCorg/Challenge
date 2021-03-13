import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Inmueble } from '../model/inmueble';
import { Reserva } from '../model/reserva';

@Injectable({
  providedIn: 'root'
})
export class InmuebleService {
  private static propiedad: Subject<Inmueble> = new BehaviorSubject<Inmueble>(undefined);

  constructor() { }

  setPropiedad(prop: Inmueble) {
    InmuebleService.propiedad.next(prop);
  }

  get Propiedad() {
    return InmuebleService.propiedad.asObservable();
  }

  getAlquileres(){
    let aux = [];

    for(let i = 0; i<10; i++){
      aux.push(new Inmueble(i));
    }
    
    return aux;
  }

  calcularDisponibilidad(fechaDesde: Date, fechaHasta: Date): Reserva{
    return new Reserva();
  }
}
