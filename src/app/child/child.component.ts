import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input()
child_message:string
message:string="Hellooo good evening....:from child"
eventmessage="button is clicked from child component"
  constructor() { }

  ngOnInit(): void {
  }
@Output()
dataEvent=new EventEmitter<String>()
sentData(){
this.dataEvent.emit(this.eventmessage)
}

}
