import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms'

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  //name = new FormControl("Rachel Green")
  studentform=new FormGroup({
    name:new FormControl(""),
    lname:new FormControl(""),
    email:new FormControl(""),
    address:new FormGroup({
      city:new FormControl(""),
      street:new FormControl(""),
      pin:new FormControl("")
    })
  })
  register(){
    console.log(this.studentform.value)
  }
}
