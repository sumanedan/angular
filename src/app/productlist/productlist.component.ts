import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'

import { HttpClient } from '@angular/common/http';
import { catchError, filter, map, retry } from 'rxjs/operators';
import { from, of } from 'rxjs';
import { ajax } from 'rxjs/ajax'
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  productlist: any
  ls: any
  constructor(private service: ProductService, private _http: HttpClient) { }

  ngOnInit(): void {
    this.service.getData().subscribe(list => {
      this.productlist = list
      console.log(this.productlist)
      console.log(typeof (this.productlist))


    })
    const source = from([
      { name: 'Joe', age: 31 },
      { name: 'Bob', age: 25 },
      { name: 'Raj', age: 45 }
    ]);
    source.pipe(filter(person => person.age >= 30))
      .subscribe(val => console.log(`Over 30:${val.name},age:${val.age}`));

    this._http.get("https://jsonplaceholder.typicode.com/posts")
      .subscribe(posts => console.log("posts", posts))

    //another method
    ajax.getJSON<any>("https://jsonplaceholder.typicode.com/todos")
      .subscribe(x => console.log("from api"))

    ajax.getJSON<any>("http://localhost:4200/assets/products.json").subscribe(
      x => {
        this.ls = x.filter(x => x.price > 100)
      }
    )

    this._http.get("https://jsonplaceholder.typicode.com/users/")
      .subscribe((data) => {
        let user_array = Object.values(data).map((x) => {
          console.log(x.name)
          return x.id ** 2
        })
        console.log(user_array)
        Object.values(data).forEach(() => { })
      })

    ajax("https://jsonplaceholder.typicode.com/users/").pipe(
      map((res: any) => {
        if (!res.response) {
          throw new Error('value expected')
        }
        console.log("something...")
        return res.response;
      }), catchError(err => of([])),retry(3)).subscribe((data: any[]) => {
        console.log("data", data)
        data.forEach((x) => {
          console.log(x.id)
          console.log(x.name)
        })
      },
        err => { console.log(err) })

  }

}


