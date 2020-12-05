import { Component, OnInit } from '@angular/core';
import { DateService } from '../date.service'
import { UserService } from '../user.service'
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  colors: string[] = ["red", "blue", "green", "yellow"]
  choice: string;
  todolist: any = []
  constructor(private dateobj: DateService, private userobj: UserService) {

  }
  disabled = 'true';
  ngOnInit(): void {
    console.log("Inside the test component", this.dateobj.getcur_Date())
    this.userobj.gettodo().subscribe(data => {
      this.todolist = data
      console.log(this.todolist)
    })
  }
  test() {
    console.log(this.choice);
  }
}
