import { Component, OnInit } from '@angular/core';
import { OpcionMenu } from 'src/app/shared/interfaces/OpcionMenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  opciones: OpcionMenu[] = [
    {
      icon: 'list-outline',
      name: 'Ver alquileres',
      redirectTo: '/listado-alquiler'
    }
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onClick(opcion:OpcionMenu){
    this.router.navigate([opcion.redirectTo]);
  }

}
