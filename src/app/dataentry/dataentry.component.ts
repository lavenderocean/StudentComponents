import { Component, OnInit ,Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {
  @Output() add = new EventEmitter;
  @Output() print = new EventEmitter;
  @Input() students;
  studentCollection:Array<object>=[];
  studentRecord: object;

  constructor() { }

  ngOnInit() {
  }
  onAdd(){
   
  }

  getEntry(){
  }
  
}
