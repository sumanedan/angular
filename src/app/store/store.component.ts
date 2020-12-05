import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
import {DateService} from '../date.service'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
submitted='false'
  constructor(private fb:FormBuilder,private dateobj:DateService) {

   }

  ngOnInit(): void {
    console.log("Inside the store component",this.dateobj.getcur_Date())
  }
storeForm=this.fb.group({
  storeid:['',[Validators.required,Validators.maxLength(3)]],
  name:['',[Validators.required,Validators.pattern("^[a-z]{3}$")]],
  gstno:[''],
  address:this.fb.group({
    city:[''],
    street:[''],
    pin:['']
  })
})
register()
{
  this.submitted='true'
  if(this.storeForm.invalid){
    return
  }
  else{
  console.log(this.storeForm.value)
}}
reset()
{
  this.submitted='false'
  this.storeForm.reset()
}
get f(){
  //console.log("submitted")
  //console.log("inside getter fn",this.storeForm.controls)
  return this.storeForm.controls
}
}
