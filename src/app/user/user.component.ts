import { AfterViewInit, Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit,OnChanges,OnDestroy,AfterViewInit {
@Input()
users:User;
log:any=[]
  constructor() { 
    console.log("constructor of user component")
    console.log("inside constructor users",this.users)
  }
ngOnChanges(changes:SimpleChanges){
console.log("onchanges invoked...........")
for (const propName in changes) {
  const chng = changes[propName];
  const cur  = JSON.stringify(chng.currentValue);
  const prev = JSON.stringify(chng.previousValue);
  this.log.push(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
 
}
console.log("state values",this.log)

}
ngOnDestroy(){
  console.log("inside ng Ondestroy")
}
ngAfterViewInit(){

}
  ngOnInit(): void {
    console.log("inside ng Oninit")
    console.log("inside ng Oninit users")

  }

}
