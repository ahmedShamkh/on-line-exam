import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdwon]'
})
export class DropdwonDirective {

  @HostBinding('class.open') isOpen = false;

  @HostListener('click') Open() {
    this.isOpen = !this.isOpen;
  }

  constructor() { }

}
