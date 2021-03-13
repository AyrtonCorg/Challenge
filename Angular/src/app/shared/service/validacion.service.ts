import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  constructor() { }

  validarFecha(fechaDesde: Date, fechaHasta:Date): boolean{
    let retorno = true;
    //Hago de esta manera para que me deje seleccionar la fecha de hoy
    let aux = new Date();
    aux.setDate(aux.getDate() -1);
    aux.setHours(23);
    aux.setMinutes(59);
    aux.setSeconds(59);

    if(fechaDesde == undefined || fechaHasta == undefined){
      retorno = false;
    }

    if(fechaDesde < aux){
      retorno = false;
    }

    if(fechaHasta < aux){
      retorno = false;
    }

    if(fechaDesde > fechaHasta){
      retorno = false;
    }

    return retorno;
  }
}
