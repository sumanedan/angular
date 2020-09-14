import { Component } from '@angular/core';
import {faSpinner,faCoffee} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Expertz Lab';
  spinner=faSpinner;
  coffee=faCoffee;
}
