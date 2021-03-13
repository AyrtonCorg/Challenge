import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('titulo') titulo: string;
  appName = "RESERVACIONES";

  constructor() { }

  ngOnInit(){
    this.titulo = (this.titulo != undefined) ? " - " + this.titulo : "";
  }

}
