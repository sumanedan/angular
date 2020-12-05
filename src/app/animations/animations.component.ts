import { Component, OnInit } from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations'

@Component({
  selector: 'app-animations',
  templateUrl: './animations.component.html',
  styleUrls: ['./animations.component.css'],
  animations:[
    trigger("openClose",[
      state("open",style({
        height:'200px',
        opacity:1,
        backgroundColor:"blue"
      })),
      state("closed",style({
        height:'200px',
        opacity:0.5,
        backgroundColor:"yellow"
      })),
      transition('open=>closed',animate(1000)),
      transition('closed=>open',animate(1500)),
    ])
  ]
})
export class AnimationsComponent implements OnInit {
state="open"
  constructor() { }

  ngOnInit(): void {
  }
toggle(){
  this.state=this.state=="open"?"closed":"open"
}
}
