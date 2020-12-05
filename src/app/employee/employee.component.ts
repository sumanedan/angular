import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
elist=[]
p=0
  constructor() {
    for(let i=0;i<100;i++){
      let obj={
        'id':i,
        'code':"e"+i.toString(),
        'salary':i*10000
      }
      this.elist.push(obj)
    }

   }

  ngOnInit(): void {
  }

}
