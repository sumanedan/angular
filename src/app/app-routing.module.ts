import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path:"",
    component:CalculatorComponent
  },
{
  path:"home",
  component:CalculatorComponent
},
{
  path:"test",
  component:TestComponent
},
{
  path:"registration",
  component:ProductentryComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
