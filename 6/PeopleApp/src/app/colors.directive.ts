import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColors]'
})
export class ColorsDirective {

  colors = [
    'AliceBlue',
    'Cyan',
    'Black',
    'Grey',
    'Purple',
    'White'
  ]

  i = 0

  constructor() { }

  @HostBinding('style.background-color') 
  bgColor:string = 'White'

  @HostListener('click') 
  changeColor(){
    this.bgColor = this.colors[this.i]
    this.i = ++this.i % this.colors.length
  }
}
