import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  @HostBinding('class.open') toggleOpen:boolean=false;


  @HostListener('click') open(eventData:Event)
  {
     this.toggleOpen=!this.toggleOpen
  }


  constructor() { }

}
