import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UntypedFormGroup, FormControl, Validators } from '@angular/forms'; 
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  lastepisode: string = ''
  starwars: any[] = []

  searchForm: UntypedFormGroup
  searchCtrl: FormControl<string>

  constructor(private dataService: DataService) { 
    this.searchCtrl = new FormControl('', { validators: [Validators.required], nonNullable: true })
    this.searchForm = new UntypedFormGroup({
        search: this.searchCtrl
    })
  }

  ngOnInit(): void {

}

onEvent = (event: any) => {
  this.lastepisode = event
}

}
