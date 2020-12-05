import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProductentryComponent } from './productentry/productentry.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  //{
    //path:"",
    //component:CalculatorComponent
  //},
{
  path:"home",
  component:CalculatorComponent,
  data:{animation:"homepage"}
},
{
  path:"test",
  component:TestComponent,
  data:{animation:"testpage"}
},
{
  path:"registration",
  component:ProductentryComponent,
  data:{animation:"registration"}
},
{
  path:"editor",
  component:NameEditorComponent
},
{
  path:"view",
  component:ProductlistComponent
},
{
  path:"child",

  children:[{
path:"home",
component:NameEditorComponent
  },{
  path:"",
  component:CalculatorComponent,

}]
},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
