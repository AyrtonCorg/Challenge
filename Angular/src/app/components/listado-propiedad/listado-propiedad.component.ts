import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Inmueble } from '../../shared/model/inmueble';
import { InmuebleService } from '../../shared/service/inmueble.service';

@Component({
  selector: 'app-listado-propiedad',
  templateUrl: './listado-propiedad.component.html',
  styleUrls: ['./listado-propiedad.component.css']
})
export class ListadoPropiedadComponent implements OnInit {
  @Input()propiedad : Inmueble;
  
  constructor(private router: Router, private propServ:InmuebleService) { }

  ngOnInit() {
  }

  onClick(propiedad){
    this.propServ.setPropiedad(propiedad);
    this.router.navigate(['/detalle-propiedad']);
  }  
}
