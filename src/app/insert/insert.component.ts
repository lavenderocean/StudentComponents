import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
@Input('insert') insert= new EventEmitter;
@Output('printing') printing= new EventEmitter;
@Input() dataRepo;
  dataEntry=[];
  entry;



  constructor() { }

  ngOnInit() {
  }
  getEntry(event){
    this.dataRepo=event;
  }
 onInsert(){
    this.dataEntry.push(this.dataRepo);
    this.entry.emit(this.dataEntry);
  }
  onPrint(){
  this.printing.emit('printing');
}
}


