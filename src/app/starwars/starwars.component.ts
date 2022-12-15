import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-starwars',
  templateUrl: './starwars.component.html',
  styleUrls: ['./starwars.component.css']
})
export class StarwarsComponent implements OnInit {

  @Input() starwars: any
  @Output() eventOut = new EventEmitter<string>()
  isHidden: boolean = false;
  
  constructor() { }

  ngOnInit(): void {}

  onClick() {
    this.eventOut.emit(this.starwars.name)
}

ngOnDestroy(): void {
}

}
