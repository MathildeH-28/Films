import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';



@Component({

  selector: 'app-body',

  templateUrl: './body.component.html',

  styleUrls: ['./body.component.css']

})

export class BodyComponent implements OnInit {



  persoLuke: any[] = []



  constructor(private dataService : DataService) { }




  ngOnInit(): void {

    this.persoLuke = this.dataService.getPersoLukeFilm()

  }



}
