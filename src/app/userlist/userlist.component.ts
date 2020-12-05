import { Component, OnInit } from '@angular/core';
import {User} from '../user'
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
userlist:User[]=[]
  constructor() {
    console.log("constructor of userlist component")
   }
add(){
this.userlist.push(new User("abc","1234"))
this.userlist.push(new User("def","567"))
this.userlist.push(new User("ghi","890"))
}
remove(){
this.userlist.pop()
}
  ngOnInit(): void {
  }

}
