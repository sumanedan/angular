import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
colors:string[]=["red","blue","green","yellow"]
choice:string;
  constructor() { }
disabled='true';
  ngOnInit(): void {
  }
test(){
  console.log(this.choice);
}
}
