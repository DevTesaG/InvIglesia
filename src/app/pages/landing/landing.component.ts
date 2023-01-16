import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  options = [
    {
      title: "Inventario" ,
      src: "./inventory"
    },
    {
      title: "Registro de Ventas",
      src: "./sells"
      
    },
    {
      title: " Historial",
      src: "./history"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
