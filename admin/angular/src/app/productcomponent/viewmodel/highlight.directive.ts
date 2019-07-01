import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
private _elem;
  constructor(elem:ElementRef) 
  { 
    this._elem=elem;
    //elem.nativeElement.style.backgroundColor="blue";
    elem.nativeElement.style.backgroundColor="pink";
  }
@HostListener('mouseenter') onmouseenter()
{
this._elem.nativeElement.style.backgroundColor="yellow";
}
@HostListener('mouseleave') onmouseleave()
{
this._elem.nativeElement.style.backgroundColor="pink";
}
}
