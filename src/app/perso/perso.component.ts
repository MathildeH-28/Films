import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-perso',
  templateUrl: './perso.component.html',
  styleUrls: ['./perso.component.css']
})
export class PersoComponent implements OnInit {

  @Input() persoLuke: any
  isHidden: boolean = false;
  sub: Subscription | null = null

  constructor(
        private router: Router,
        private dataService: DataService
  ) { }

  ngOnInit(): void {
  }

}
