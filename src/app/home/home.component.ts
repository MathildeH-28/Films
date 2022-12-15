import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() { 
  }

  ngOnInit(): void {}

}
