import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logoPath: string = 'assets/th.jpg'
  items: Array<any> = new Array<any>()

  constructor() { }

  ngOnInit(): void {
    this.items.push( { name: 'Accueil', display: true })
    this.items.push( { name: 'Films', display: true })
    this.items.push( { name: 'Personnages', display: true })
    this.items.push( { name: 'Vaisseaux et Véhicules', display: true })
    this.items.push( { name: 'Espèces', display: true })
}
}
