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
    for(let i=0;i<this.prod.length-1;i++)
    localStorage.setItem('"product"i', JSON.stringify(this.prod[i]));
    this.model = new Product("", "", "", "");
}
  showData()
  {
    console.log("The Products in Local Storage are......")
    for(let j=1;j<=5;j++){
    console.log("NEWPRODUCT:",localStorage.getItem("product"+j))
  }
  
    document.getElementById("show").innerText="Products are:\n"+this.prod
  }

}


