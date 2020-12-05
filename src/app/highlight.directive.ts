import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
 @Input("appHighlight")
 highlight:string
 @Input()
 default

  constructor(private ref:ElementRef) { 
    this.ref.nativeElement.style.backgroundColor=this.default
  }
  @HostListener("mouseenter")
onMouseover(){
this.ref.nativeElement.style.backgroundColor=this.highlight||this.default
}
@HostListener("mouseleave")
onMouseleave(){
this.ref.nativeElement.style.backgroundColor=null
}
}
