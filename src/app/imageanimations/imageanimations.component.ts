import { Component, OnInit } from '@angular/core';
import {animate,trigger,transition,state,style} from '@angular/animations'
@Component({
  selector: 'app-imageanimations',
  templateUrl: './imageanimations.component.html',
  styleUrls: ['./imageanimations.component.css'],
  animations:[trigger("animateimage",[
   state("zoomin",style({
transform:'scale(2)'
   })),
   state("zoomout",style({
    transform:'scale(1)'
       })),
       state("move",style({
         transform:'translateX(100%)'
       })),
       state("spin",style({
transform:'rotateY(180deg) rotateZ(90deg)'
       })),
       transition("*<=>*",animate(1500))
])]
})
export class ImageanimationsComponent implements OnInit {
state="zoomout"
  constructor() { }

  ngOnInit(): void {
  }
//toggle(){
 // this.state=this.state=="zoomin"?"zoomout":"zoomin"
//}
scale(){
  this.state="zoomin"
}
rotate(){
  this.state="spin"
}
move(){
  this.state="move"
}
}
