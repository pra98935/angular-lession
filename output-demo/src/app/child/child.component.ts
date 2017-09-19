import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() customClick = new EventEmitter();

  fireYellEvent(e){
    this.customClick.emit(e);
  }

  constructor() { }

  ngOnInit() {
  }

}
