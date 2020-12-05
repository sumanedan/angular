import { Component, OnInit } from '@angular/core';
import { dateInputsHaveChanged } from '@angular/material/datepicker/datepicker-input-base';
import { fromEvent, pipe, of, timer, interval, throwError } from 'rxjs';
import { throttleTime, scan, filter, delay, map, catchError, take, mergeMap, finalize, retry, delayWhen, retryWhen } from 'rxjs/operators'
@Component({
  selector: 'app-react',
  templateUrl: './react.component.html',
  styleUrls: ['./react.component.css']
})
export class ReactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //fromEvent(document,"click").subscribe((data)=>{
    // console.log(typeof data)
    //console.log(data)
    // console.log("click event occurs.....")
    //})
    fromEvent(document, "click").pipe(scan(count => count + 1, 0)).subscribe(x => {
      //console.log("button is clicked for the ",x,"time")
      //console.log(`button clicked for the ${x} time`)
    })

    //fromEvent(document,"click").pipe(
    //throttleTime(3000),scan(count=>count+1,0)).subscribe(
    // count=>console.log(`button is clicked for the ${count} time`)
    //)
    of(10, 20, 30).subscribe(next => console.log(next),
      err => console.log("error occured"),
      () => console.log("end"))

    // of(10, 20, 30, 31, 71, 40, 50, 60).pipe(filter(x => x % 2 != 0)).
    //   subscribe(next => console.log(next),
    //     err => console.log("error occurred"),
    //     () => console.log("end"))

    //interval(3000).pipe(map(x=>x+1),filter(x=>x%2==0)).subscribe(next=>console.log(next))

    fromEvent(document, "click").
      pipe(delay(2000)).
      subscribe(data => console.log(new Date(), data, "clicked"))

    //timer(7000,1000).subscribe(x=>console.log(x,new Date()))

    of(10, 20, 30, 40, 50).pipe(map(x => { if (x == 40) { throw 40 } return x }),

      catchError(x => of(60, 70, 80, 90)), take(6))
      //catchError(x=>{throw "error value"+x})).
      .subscribe(next => console.log("value", next),
        err => console.log("error occured", err),
        () => console.log("error"))

    // interval(1000).pipe(
    //   mergeMap(x => x === 2
    //     ? throwError('Twos are bad')
    //     : of('a', 'b', 'c')
    //   ),
    // ).subscribe(x => console.log(x), e => console.error(e));

    // const letters = of('a', 'b', 'c');
    // const result = letters.pipe(
    //   mergeMap(x => interval(1000).pipe(map(i => {
    //     if (i == 2) {
    //       console.log(i)
    //       throwError("error occured at value 2")
    //     } return x + i
    //   }))))
    //   .subscribe(x => console.log(x))

    // of(11, 12, 13, 14, 15).pipe(
    //   map(n => {
    //     if (n == 14) {
    //       throw 'fourteen!';
    //     }
    //     return n;
    //   }),
    //   //catchError(err => throwError(err)),
    //   //catchError(x=>of(1,2,3)),
    //   //catchError(err => of(10, 20, 30)),
    //   //finalize(() => { console.log("inside finalize block") })
    //   retryWhen(err => err.pipe(delayWhen(err => timer(1000)))), take(5)
    // ).subscribe(x => console.log(x),
    //   err => console.log("error occured"));

    // const source = interval(1000);
    // const example = source.pipe(
    //   mergeMap(val => {
    //     if (val > 5) {
    //       return throwError('Error!');
    //     }
    //     return of(val);
    //   }),
    //   //retry 2 times on error
    //   retry(2)

    // );

    // const subscribe = example.subscribe({
    //   next: val => console.log(val),
    //   error: val => console.log(`${val}: Retried 2 times then quit!`)
    // });

    of(10, 20, 30, 40, 50).pipe(
      map(n => {
        if (n == 40) {
          throw "40"
        }
        return n
      }), retryWhen(err => err.pipe(delay(1000),take(2))))
      .subscribe(x => console.log(x),
        err => console.log("error"),
        () => console.log("end")
      )

  }
}



