import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit,AfterViewInit,AfterViewChecked {
  msg_from_child:string
  message_Parent:string="....this is a message from parent......"
  @ViewChild(ChildComponent)
  child
  constructor(private def:ChangeDetectorRef) { }

  ngOnInit(): void {
  }
ngAfterViewInit(){
  this.msg_from_child=this.child.message
}
ngAfterViewChecked(){
this.def.detectChanges()
}
receiveData(data){
  this.msg_from_child=data
}
}
