import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { SumanComponent } from './suman/suman.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ProductentryComponent } from './productentry/productentry.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SumanComponent,
    CalculatorComponent,
    ProductentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
