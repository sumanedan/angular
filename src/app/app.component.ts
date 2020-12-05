import { Component } from '@angular/core';
import {faSpinner,faCoffee} from '@fortawesome/free-solid-svg-icons'
import {slideInAnimation} from './animations'
import {RouterOutlet} from '@angular/router'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[slideInAnimation]
})
export class AppComponent {
  title = 'Expertz Lab';
  spinner=faSpinner;
  coffee=faCoffee;
color:string
  prepareRoute(outlet:RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
