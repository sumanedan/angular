import { Component, OnInit } from '@angular/core';
import { Product } from '../product'
@Component({
  selector: 'app-productentry',
  templateUrl: './productentry.component.html',
  styleUrls: ['./productentry.component.css']
})
export class ProductentryComponent implements OnInit {
  model = new Product("", "", "", "");
  constructor() { }

  ngOnInit(): void {
  }
  prod: string[] = [];
  saveProduct() {
    //console.log(this.model)
    let str = JSON.stringify(this.model)
    this.SaveDataToLocalStorage(str);
  }
  SaveDataToLocalStorage(str) {
    this.prod.push(str);
    localStorage.setItem('product', JSON.stringify(this.prod));
    this.model = new Product("", "", "", "");
  }
  showData()
  {
    console.log("The Products in Local Storage are......")
    console.log(localStorage.getItem('product'))
    //alert("Products are:\n"+this.prod)
    document.getElementById("show").innerText="Products are:\n"+this.prod
  }

}


