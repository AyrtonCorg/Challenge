import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';
import { Property } from '../model/Property';
import { Reserva } from '../model/Reserva';

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private static propiedad: Subject<Property> = new BehaviorSubject<Property>(undefined);

  constructor() { }

  setPropiedad(prop: Property) {
    PropiedadesService.propiedad.next(prop);
  }

  get Propiedad() {
    return PropiedadesService.propiedad.asObservable();
  }

  getAlquileres(){
    let aux = [];

    for(let i = 0; i<10; i++){
      aux.push(new Property(i));
    }
    
    return aux;
  }

  calcularDisponibilidad(fechaDesde: Date, fechaHasta: Date): Reserva{
    return new Reserva();
  }
}
