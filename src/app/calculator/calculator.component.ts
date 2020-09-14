import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  value1: string = "";
  value2: string = "";
  result: number = 0;
  operator: string = ''
  add() {
    console.log("fn called.........", event)
    this.result = parseInt(this.value1) + parseInt(this.value2);
    return this.result;
  }
  test(e) {
    console.log("test fn called.....", e)
  }
  setValue(i) {
    if (this.value1 == '') {
      this.value1 = i;
    } else {
      this.value2 = i;
      this.calculate(this.operator)
    }
  }
  setOperator(opr) {
    this.operator = opr;
  }

  calculate(opr) {
    if (opr == '+') {
      this.result = parseInt(this.value1) + parseInt(this.value2)
    }
    if (opr == '-') {
      this.result = parseInt(this.value1) - parseInt(this.value2)
    }
    if (opr == '*') {
      this.result = parseInt(this.value1) * parseInt(this.value2)
    }
    if(opr=='clr'){
  
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
