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
import {ReactiveFormsModule} from '@angular/forms';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { StoreComponent } from './store/store.component'

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    SumanComponent,
    CalculatorComponent,
    ProductentryComponent,
    NameEditorComponent,
    StoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
