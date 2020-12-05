import { Component, OnInit } from '@angular/core';
import { Student } from '../student'
import {StudentService} from '../student.service'
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
model=new Student()
  constructor(private service:StudentService) { }
studentlist:Student[]
  ngOnInit(): void {
    this.service.readStudent().subscribe(data=>{
      console.log("Data received........",data)
      this.studentlist=data.map((doc)=>{
        return{
          did:doc.payload.doc.id,
          ...doc.payload.doc.data() as {}
        } as Student
      })
    })
  }
  save(){
    console.log(this.model)
    if(this.model.did==null){
    this.service.saveStudent(this.model)
    }else{
      this.service.updateStudent(this.model)

    }
  }
edit(student){
this.model=student;
}
delete(student){
this.service.deleteStudent(student)
}
}
