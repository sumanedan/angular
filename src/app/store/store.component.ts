import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private fb:FormBuilder) {

   }

  ngOnInit(): void {
  }
storeForm=this.fb.group({
  storeid:['',[Validators.required,Validators.maxLength(3)]],
  name:['',[Validators.required,Validators.pattern("Anna")]],
  gstno:[''],
  address:this.fb.group({
    city:[''],
    street:[''],
    pin:['']
  })
})
register()
{
  console.log(this.storeForm.value)
}
}
